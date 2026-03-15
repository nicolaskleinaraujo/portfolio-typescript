// Modules
import type { RefObject } from "react"

interface ExperienceProps {
    ref: RefObject<null>
}

const Experience = ({ ref }: ExperienceProps) => {
    return (
        <div ref={ref} className="flex flex-col text-[#EBEBEB]">
            <h2 className="text-2xl mb-5 font-bold text-left indent-5">Experiência Profissional</h2>

            <div className="flex flex-col mx-5 gap-10">
                <div className="flex items-start gap-4 mb-5">
                    <div className="flex flex-col items-start relative pl-5 border-l-2 border-[#2E2E2E]/40 w-screen">
                        <div className="h-4 w-4 rounded-full bg-[#7B9EFF] absolute left-0 top-0 -translate-x-1/2"></div>

                        <h2 className="text-2xl">Analista Operacional I</h2>
                        <h3 className="text-[#7B9EFF] text-sm mb-3">Interfile - Full Service BPO</h3>

                        <p className="text-[#8C8C8C] text-sm mb-2 sm:absolute sm:right-0 sm:top-0">2025 - Presente</p>

                        <p className="text-[#8C8C8C] text-left">Atuo como analista operacional, com foco em control desk. Realizo a distribuição de demandas, desenvolvo indicadores e crio automações para uso interno da equipe.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                    <div className="flex flex-col items-start relative pl-5 border-l-2 border-[#2E2E2E]/40 w-screen">
                        <div className="h-4 w-4 rounded-full bg-[#7B9EFF] absolute left-0 top-0 -translate-x-1/2"></div>

                        <h2 className="text-2xl">Jovem Aprendiz Administrativo</h2>
                        <h3 className="text-[#7B9EFF] text-sm mb-3">Aptar Brasil</h3>

                        <p className="text-[#8C8C8C] text-sm mb-2 sm:absolute sm:right-0 sm:top-0">2021 - 2022</p>

                        <p className="text-[#8C8C8C] text-left">Trabalhei no setor de segurança, administrando um almoxarifado de EPIs. Atuava na requisição de produtos, manutenção de estoque e atendimento aos colaboradores.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
