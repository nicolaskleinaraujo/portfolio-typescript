import { SiDuolingo } from "react-icons/si"

const Duolingo = () => {
    return (
        <div className="flex items-center text-center border-emerald-500/40 border rounded-xl shadow-emerald-500/20 shadow-lg mb-6 mt-2 gap-3 p-2">
            <SiDuolingo className="h-6 w-6 text-emerald-500" />
            <div className="text-center">
                <p className="text-2xl font-bold text-white">1000</p>
                <p className="text-xs text-muted-foreground text-[#8C8C8C]">Duolingo Score</p>
            </div>
        </div>
    )
}

export default Duolingo
