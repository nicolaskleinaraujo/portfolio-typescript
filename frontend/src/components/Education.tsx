// Modules
import type { RefObject } from "react"

interface EducationProps {
    ref: RefObject<null>
}

const Education = ({ ref }: EducationProps) => {
    return (
        <div ref={ref} className="flex flex-col text-[#EBEBEB] my-25 sm:my-33 md:my-37 mx-auto max-w-4xl">
            <h2 className="text-2xl mb-5 font-bold text-left indent-5">Formação Educacional</h2>

            <div className="flex flex-col mx-5 gap-10">
                <div className="flex items-start gap-4 mb-5">
                    <div className="flex flex-col items-start relative pl-5 border-l-2 border-[#2E2E2E]/40 w-screen">
                        <div className="h-4 w-4 rounded-full bg-[#7B9EFF] absolute left-0 top-0 -translate-x-1/2"></div>

                        <h2 className="text-left text-2xl">Análise e Desenvolvimento de Sistemas</h2>

                        <h3 className="text-[#7B9EFF] text-sm mb-3">UniCesumar</h3>

                        <p className="text-[#8C8C8C] text-sm mb-2 sm:absolute sm:right-0 sm:top-0">2024 - 2026</p>

                        <p className="text-[#8C8C8C] text-left">Tecnólogo em ADS com previsão de conclusão no meio de 2026. Durante o curso, aprendo linguagens como C e Python, além de explorar os fundamentos de tecnologia, estrutura de dados e outros tópicos importantes da área.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 mb-5">
                    <div className="flex flex-col items-start relative pl-5 border-l-2 border-[#2E2E2E]/40 w-screen">
                        <div className="h-4 w-4 rounded-full bg-[#7B9EFF] absolute left-0 top-0 -translate-x-1/2"></div>

                        <h2 className="text-left text-2xl">Certificação de Inglês (TOEIC)</h2>

                        <h3 className="text-[#7B9EFF] text-sm mb-3">TOEIC</h3>

                        <p className="text-[#8C8C8C] text-sm mb-2 sm:absolute sm:right-0 sm:top-0">2023</p>

                        <p className="text-[#8C8C8C] text-left">Certificado TOEIC obtido em 2023, comprovando proficiência em inglês para leitura, escrita e comunicação em ambientes profissionais e tecnológicos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
