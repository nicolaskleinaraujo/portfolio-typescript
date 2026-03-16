import axios from "axios"
import { SiDuolingo } from "react-icons/si"
import { useEffect, useState } from "react"

const Duolingo = () => {
    const [cashedStreak, setCashedStreak] = useState<number>()
    const [streak, setStreak] = useState<number>()

    const fetchDuolingo = async() => {
        try {
            await new Promise(resolve => setTimeout(resolve, 3000))
            const res = await axios.get(import.meta.env.VITE_DUOLINGO_URL as string)

            setStreak(res.data.users[0].streak)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setCashedStreak(Math.floor((new Date().getTime() - new Date("2024-10-28").getTime()) / (1000 * 60 * 60 * 24)))
        fetchDuolingo()
    }, [])

    return (
        <div className="flex items-center text-center border-emerald-500/40 border rounded-xl shadow-emerald-500/20 shadow-lg mb-6 mt-3 gap-3 p-2">
            <SiDuolingo className="h-6 w-6 text-emerald-500" />
            <div className="text-center">
                {/* TODO create skeleton loading */}
                <p className="text-2xl font-bold text-white">{!streak ? cashedStreak : streak}</p>
                <p className="text-xs text-muted-foreground text-[#8C8C8C]">Duolingo Score</p>
            </div>
        </div>
    )
}

export default Duolingo
