interface Indicate {
    solvencia: number;
}

const Indicator: React.FC<Indicate> = ({ solvencia }) => {

    const widthPercentage = Math.min(100, Math.max(0, solvencia));

    return (
        <>
            <div className="text-black">
                <p>Tu nivel de solvencia esta en un:</p>
                <p className="text-3xl font-bold m-8">{solvencia}%</p>
            </div>
            <div className="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-red-600 to-green-500 transition-all duration-300"
                    style={{ width: `${widthPercentage}%` }}
                ></div>
            </div>
            <div className="text-black text-sm px-5 pt-2 w-[100%] flex justify-between">
                <p>Baja</p>
                <p>Media</p>
                <p>Alta</p>
            </div>
        </>
    );
};

export default Indicator;