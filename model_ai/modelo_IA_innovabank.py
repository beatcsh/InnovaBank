# -*- coding: utf-8 -*-
"""
Created on Sat Feb 22 22:58:08 2025

@author: monts
"""
from fastapi import FastAPI
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

client = MongoClient("mongodb+srv://beatm:beat1234.@dbcluster.plpdo.mongodb.net/")
db = client["innova_db"]

coleccion_transacciones = db["transactions"]
datos_transacciones = list(coleccion_transacciones.find())
df_transacciones = pd.DataFrame(datos_transacciones)

# Asegurándonos de que "monto" sea numérico
df_transacciones["monto"] = df_transacciones["monto"].astype(float)

# Generando las columnas de ingresos y gastos
df_transacciones["ingresos"] = np.where(df_transacciones["tipo"] == "ingreso", df_transacciones["monto"], 0)
df_transacciones["gastos"] = np.where(df_transacciones["tipo"] == "gasto", df_transacciones["monto"], 0)

# Agrupando por id_cuenta
df_grouped = df_transacciones.groupby("id_cuenta")[["ingresos", "gastos"]].sum().reset_index()

# Asignando un valor fijo de historial_crediticio (500) para todos los items
df_grouped["historial_crediticio"] = 500

# Creamos la columna "solvente" basado en los ingresos y gastos
df_grouped["solvente"] = np.where((df_grouped["ingresos"] - df_grouped["gastos"] > 2000), 1, 0)

# Definimos las variables independientes (X) y dependientes (Y)
x = df_grouped[["ingresos", "gastos", "historial_crediticio"]]
y = df_grouped["solvente"]

# Dividimos los datos en entrenamiento y prueba
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

# Creamos y entrenamos el modelo de regresión logística
modelo = LogisticRegression()
modelo.fit(x_train, y_train)

# Hacemos las predicciones
y_pred = modelo.predict(x_test)
accuracy = accuracy_score(y_test, y_pred)
print(f'Precisión del modelo: {accuracy:.2f}')

# Mostramos la matriz de confusión
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues")
plt.xlabel("Predicción")
plt.ylabel("Real")
plt.title("Matriz de Confusión")
plt.show()

# Definimos el modelo para la predicción a través de la API
class InputData(BaseModel):
    ingresos: float
    gastos: float
    balance: float
    historial_crediticio: int

@app.post("/predict")
def predict(data: InputData):
    print(data)
    datos = np.array([[data.ingresos, data.gastos, data.historial_crediticio]])
    percent = ((data.balance + data.ingresos) / (data.balance + data.ingresos + data.gastos + 1)) * 100
    prediccion = modelo.predict(datos)
    return {"solvente": int(prediccion[0]), "percent": percent}