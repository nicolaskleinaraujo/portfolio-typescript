import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center text-[#EBEBEB] mt-8">
            <h2 className="text-2xl mb-5">Projetos</h2>

            <div className="border-1 border-[#2E2E2E] rounded-xl mx-3 py-4 hover:border-[#7B9EFF]/50 transition-all duration-300">
                <img src="./projects-photos/automailer_img.jpg" alt="Project Image" className="w-full h-42" />

                <div className="my-10 ml-3">
                    <h2 className="text-left text-xl">Newsletter automático para Kindle</h2>

                    <p className="text-left text-[#8C8C8C] my-3">Este Web Service Gratuito baixa um e-mail através de um servidor IMAP e o converte para um arquivo EPUB. O arquivo EPUB é enviado para sua conta “Send to Kindle”, que pode ser lido através de um dispositivo Kindle. O frontend basicamente mostra o passo a passo para configurar sua conta Kindle. O Cron Job está configurado para ser executado todos os dias às 12h.</p>

                    <div className="flex text-left text-xs space-x-3">
                        <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">React</span>
                        <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">Node.JS</span>
                        <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">TypeScript</span>
                        <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">IMAP</span>
                    </div>
                </div>

                <nav className="flex justify-center space-x-4 mb-4">
                    <a href="https://github.com/nicolaskleinaraujo/node-automail" target="_blank" className="inline-flex items-center justify-center  border-1 border-[#2E2E2E] rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 hover:bg-[#262626] transition-all"><FiGithub /> Ver Código</a>
                    <a href="https://node-automail.nkportfolio.tech" target="_blank" className="inline-flex items-center justify-center rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 text-[#0D0D0D] bg-[#7B9EFF] transition-all hover:bg-[#7B9EFF]/85"><FiExternalLink /> Demo ao Vivo</a>
                </nav>
            </div>
        </div>
    )
}

export default Projects
