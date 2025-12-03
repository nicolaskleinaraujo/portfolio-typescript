const Experience = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center text-[#EBEBEB]">
            <h2 className="text-2xl mb-5">Experiência Profissional</h2>

            <div className="flex flex-col mx-5">
                <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                        <div className="h-6 w-6 rounded-full bg-[#7B9EFF]"></div>
                        <div className="w-[2px] h-53 bg-[#2E2E2E]/40"></div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl">Analista Operacional I</h2>
                        <h3 className="text-[#7B9EFF] text-sm mb-3">Interfile - Full Service BPO</h3>

                        <p className="text-[#8C8C8C] text-sm mb-2">2025 - Presente</p>

                        <p className="text-[#8C8C8C] text-left">Atuo como analista operacional, com foco em control desk. Realizo a distribuição de
demandas, desenvolvo indicadores e crio automações para uso interno da equipe.
</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
