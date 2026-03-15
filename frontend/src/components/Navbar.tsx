import type { RefObject } from "react"

interface NavbarProps {
    homeRef: RefObject<null>
    aboutRef: RefObject<null>
    experienceRef: RefObject<null>
    educationRef: RefObject<null>
    projectsRef: RefObject<null>
}

const Navbar = ({ homeRef, aboutRef, experienceRef, educationRef, projectsRef }: NavbarProps) => {
    const scrollToSection = (ref: RefObject<null | HTMLDivElement>) => {
        if (ref.current !== null) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    
    return (
        <nav className="flex fixed w-full bg-black/95 border-b border-[#7B9EFF]/5 shadow-lg shadow-[#7B9EFF]/5 text-white backdrop-blur-md py-6 z-99">
            <button 
                onClick={() => scrollToSection(homeRef)}
                className="ml-5 text-lg font-semibold cursor-pointer"
            >Portfolio</button>

            <div className="hidden text-[#8C8C8C] text-sm ml-3 md:flex md:flex-row">
                <button 
                    onClick={() => scrollToSection(aboutRef)}
                    className="ml-5 font-semibold cursor-pointer hover:text-white/85 transition-colors"
                >Sobre</button>

                <button 
                    onClick={() => scrollToSection(experienceRef)}
                    className="ml-5 font-semibold cursor-pointer hover:text-white/85 transition-colors"
                >Experiencia</button>

                <button 
                    onClick={() => scrollToSection(educationRef)}
                    className="ml-5 font-semibold cursor-pointer hover:text-white/85 transition-colors"
                >Formações</button>

                <button 
                    onClick={() => scrollToSection(projectsRef)}
                    className="ml-5 font-semibold cursor-pointer hover:text-white/85 transition-colors"
                >Projetos</button>
            </div>
        </nav>
    )
}

export default Navbar
