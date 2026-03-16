import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa"
import Duolingo from "./Duolingo"
import type { RefObject } from "react"

interface HomeProps {
    ref: RefObject<null>
}

const Home = ({ ref }: HomeProps) => {
    const copyEmail = async() => {
        try {
            await navigator.clipboard.writeText("contatonkfa@gmail.com")
            // TODO add toast notification
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div 
            ref={ref}
            className="flex justify-center flex-col lg:flex-row lg:justify-between items-center text-center pt-30 text-[#EBEBEB]"
        >
            <div className="flex flex-col items-center lg:text-left lg:items-start lg:ml-35">
                <h3 className="text-[#8C8C8C] text-xl">Olá, eu sou</h3>
                <h1 className="text-4xl my-3 md:text-6xl">Nicolas Klein</h1>
                <h2 className="text-[#7B9EFF] md:text-2xl mb-2">Desenvolvedor Full Stack</h2>

                <Duolingo />

                <p className="mx-3 max-w-xl lg:mx-0">Juntando tecnologia com proposito para a solução de problemas de forma moderna e eficiente. Especializado em JavaScript e TypeScript.</p>

                <div className="flex m-3 gap-8">
                    <a href="https://github.com/nicolaskleinaraujo/" target="_blank" className="hover:bg-[#262626] p-2 rounded-md"><LuGithub /></a>
                    <a href="https://www.linkedin.com/in/nicolaskleinaraujo/" target="_blank" className="hover:bg-[#262626] p-2 rounded-md"><LuLinkedin /></a>
                    <button onClick={() => copyEmail()} className="hover:bg-[#262626] p-2 rounded-md cursor-pointer"><LuMail /></button>
                    <a href="https://wa.me/5544997666224" target="_blank" className="hover:bg-[#262626] p-2 rounded-md"><FaWhatsapp /></a>
                </div>
            </div>

            <img src="./my_photo.jpg" alt="My photo" className="w-57 h-57 border-[#7B9EFF]/40 border-2 rounded-md opacity-88 lg:w-70 lg:h-70 lg:mr-35" />
        </div>
    )
}

export default Home
