// Modules
import type { RefObject } from "react"

interface AboutProps {
    ref: RefObject<null>
}

const About = ({ ref }: AboutProps) => {
    return (
        <div 
            ref={ref}
            className="flex flex-col justify-center text-left my-25 sm:my-33 md:my-37 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-[#EBEBEB]"
        >
            <h2 className="text-2xl mb-2 text-left font-bold">Sobre Mim</h2>
            <p className="text-[#8C8C8C]">
                Sou um desenvolvedor Full Stack apaixonado por tecnologia desde pequeno. 
                Desenvolvo aplicações pensando principalmente na utilização prática no dia a dia dos usuários. 
                Atualmente mantenho um <a href="https://node-automail.nkportfolio.tech" target="_blank" className="underline cursor-pointer">web service gratuito</a> 
                {" "}utilizado diariamente por 7 pessoas. Além disso, desenvolvi meu primeiro MVP, que hoje conta com cerca de 
                47 usuários ativos diariamente.
            </p>
        </div>
    )
}

export default About
