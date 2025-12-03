const Education = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center text-[#EBEBEB] mt-15">
            <h2 className="text-2xl mb-5">Formação Educacional</h2>

            <div className="flex flex-col mx-5">
                <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                        <div className="h-6 w-6 rounded-full bg-[#7B9EFF]"></div>
                        <div className="w-[2px] h-53 bg-[#2E2E2E]/40"></div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-left text-2xl">Análise e Desenvolvimento de Sistemas</h2>

                        <h3 className="text-[#7B9EFF] text-sm mb-3">UniCesumar</h3>

                        <p className="text-[#8C8C8C] text-sm mb-2">2024 - 2026</p>

                        <p className="text-[#8C8C8C] text-left">Tecnólogo em ADS, com previsão de conclusão no meio 2026</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
