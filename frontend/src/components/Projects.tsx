import { FiGithub, FiExternalLink, FiDownload } from "react-icons/fi";

const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center text-[#EBEBEB] my-8">
            <h2 className="text-2xl mb-5 font-bold">Projetos</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="border-1 border-[#2E2E2E] rounded-xl mx-3 py-4 hover:border-[#7B9EFF]/50 transition-all duration-300">
                    <img src="./projects-photos/automailer_img.jpg" alt="Project Image" className="w-full h-42 object-cover" />
                    <div className="my-10 ml-3">
                        <h2 className="text-left text-xl">Newsletter automático para Kindle</h2>
                        <p className="text-left text-[#8C8C8C] my-3 pr-1">Este Web Service Gratuito baixa um e-mail através de um servidor IMAP e o converte para um arquivo EPUB. O arquivo EPUB é enviado para sua conta “Send to Kindle”, que pode ser lido através de um dispositivo Kindle. O frontend basicamente mostra o passo a passo para configurar sua conta Kindle. O Cron Job está configurado para ser executado todos os dias às 12h.</p>
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
                <div className="border-1 border-[#2E2E2E] rounded-xl mx-3 py-4 hover:border-[#7B9EFF]/50 transition-all duration-300">
                    <img src="./projects-photos/clothing_img.jpg" alt="Project Image" className="w-full h-42 object-cover" />
                    <div className="my-10 ml-3 min-h-79">
                        <h2 className="text-left text-xl">Loja de Roupas FullStack</h2>
                        <p className="text-left text-[#8C8C8C] my-3 pr-1 min-h-59">Este projeto é uma loja de roupas que permite aos usuários comprar e pagar por suas compras. Para usar os recursos de administração, use a seguinte conta: email: 'admin@gmail.com', senha: '12345'. Para o frontend utilizei React e o backend foi feito em Node.js. O pagamento é feito através do MercadoPago.</p>
                        <div className="flex text-left text-xs space-x-3">
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">React</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">Node.JS</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">MercadoPago</span>
                        </div>
                    </div>
                    <nav className="flex justify-center space-x-4 mb-4">
                        <a href="https://github.com/nicolaskleinaraujo/clothing-project" target="_blank" className="inline-flex items-center justify-center  border-1 border-[#2E2E2E] rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 hover:bg-[#262626] transition-all"><FiGithub /> Ver Código</a>
                        <a href="https://klein-store.nkportfolio.tech" target="_blank" className="inline-flex items-center justify-center rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 text-[#0D0D0D] bg-[#7B9EFF] transition-all hover:bg-[#7B9EFF]/85"><FiExternalLink /> Demo ao Vivo</a>
                    </nav>
                </div>
                <div className="border-1 border-[#2E2E2E] rounded-xl mx-3 py-4 hover:border-[#7B9EFF]/50 transition-all duration-300">
                    <img src="./projects-photos/countdown_img.jpg" alt="Project Image" className="w-full h-42 object-cover" />
                    <div className="my-10 ml-3">
                        <h2 className="text-left text-xl">Contagem Regressiva com TypeScript</h2>
                        <p className="text-left text-[#8C8C8C] my-3 pr-1">Este projeto é um aplicativo de contagem regressiva que permite aos usuários criar páginas personalizadas e compartilhar com seus amigos. Dentro desta página você pode criar eventos e escolher uma música do Spotify para personalizar sua página. Para o frontend utilizei React e o Backend foi feito em Node.js com TypeScript.</p>
                        <div className="flex text-left text-xs space-x-3">
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">React</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">Node.JS</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">Spotify API</span>
                        </div>
                    </div>
                    <nav className="flex justify-center space-x-4 mb-4">
                        <a href="https://github.com/nicolaskleinaraujo/countdown" target="_blank" className="inline-flex items-center justify-center  border-1 border-[#2E2E2E] rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 hover:bg-[#262626] transition-all"><FiGithub /> Ver Código</a>
                        <a href="https://countdown.nkportfolio.tech" target="_blank" className="inline-flex items-center justify-center rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 text-[#0D0D0D] bg-[#7B9EFF] transition-all hover:bg-[#7B9EFF]/85"><FiExternalLink /> Demo ao Vivo</a>
                    </nav>
                </div>
                <div className="border-1 border-[#2E2E2E] rounded-xl mx-3 py-4 hover:border-[#7B9EFF]/50 transition-all duration-300">
                    <img src="./projects-photos/shop_img.jpg" alt="Project Image" className="w-full h-42 object-cover" />
                    <div className="my-10 ml-3">
                        <h2 className="text-left text-xl">Loja feita com React e Node.js</h2>
                        <p className="text-left text-[#8C8C8C] my-3 pr-1">Este projeto é uma loja que permite aos usuários criar pedidos, gerenciar itens e utilizar muitos outros recursos. Para usar os recursos de admin, use a seguinte conta: email: 'admin@gmail.com', senha: '12345'. A autenticação ocorre no middleware, utilizando HTTPOnly Signed Cookies e JWT.</p>
                        <div className="flex text-left text-xs space-x-3">
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">React</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">Node.JS</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">Bcrypt</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">JWT</span>
                        </div>
                    </div>
                    <nav className="flex justify-center space-x-4 mb-4">
                        <a href="https://github.com/nicolaskleinaraujo/shop-project" target="_blank" className="inline-flex items-center justify-center  border-1 border-[#2E2E2E] rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 hover:bg-[#262626] transition-all"><FiGithub /> Ver Código</a>
                        <a href="https://shop-project.nkportfolio.tech" target="_blank" className="inline-flex items-center justify-center rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 text-[#0D0D0D] bg-[#7B9EFF] transition-all hover:bg-[#7B9EFF]/85"><FiExternalLink /> Demo ao Vivo</a>
                    </nav>
                </div>
                <div className="border-1 border-[#2E2E2E] rounded-xl mx-3 py-4 hover:border-[#7B9EFF]/50 transition-all duration-300">
                    <img src="./projects-photos/todo_list_img.jpg" alt="Project Image" className="w-full object-cover" />
                    <div className="my-10 ml-3">
                        <h2 className="text-left text-xl">To-do List com Python</h2>
                        <p className="text-left text-[#8C8C8C] my-3 pr-1">Lista 'To-do' feita utilizando Python. A interface grafica foi feita utilizando a biblioteca 'PyQT' e o salvamento dos dados foi feito utilizando o 'Pandas' em um arquivo 'csv'. A lista 'To-do' facilita a programação de tarefas cotidianas.</p>
                        <div className="flex text-left text-xs space-x-3">
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">Python</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">Pandas</span>
                            <span className="bg-[#7B9EFF]/10 text-[#7B9EFF] px-2 py-1 rounded-md">PyQT</span>
                        </div>
                    </div>
                    <nav className="flex justify-center space-x-4 mb-4">
                        <a href="https://github.com/nicolaskleinaraujo/todo-list" target="_blank" className="inline-flex items-center justify-center  border-1 border-[#2E2E2E] rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 hover:bg-[#262626] transition-all"><FiGithub /> Ver Código</a>
                        <a href="./todolist_app.zip" className="inline-flex items-center justify-center rounded-md gap-2 px-2 py-2 font-medium text-sm w-32 text-[#0D0D0D] bg-[#7B9EFF] transition-all hover:bg-[#7B9EFF]/85"><FiDownload /> Download</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Projects
