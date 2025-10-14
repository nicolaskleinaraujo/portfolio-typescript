import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa"

const Home = () => {
    const copyEmail = async() => {
        try {
            await navigator.clipboard.writeText("contatonkfa@gmail.com")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Olá, eu sou</h2>
            <h1>Nicolas Klein</h1>
            <h2>Desenvolvedor Full Stack</h2>

            <p>Juntando tecnologia com proposito para a solução de problemas de forma moderna e eficiente. Especializado em JavaScript e TypeScript.</p>

            <div>
                <a href="https://github.com/nicolaskleinaraujo/" target="_blank"><LuGithub /></a>
                <a href="https://www.linkedin.com/in/nicolaskleinaraujo/" target="_blank"><LuLinkedin /></a>
                <button onClick={() => copyEmail()}><LuMail /></button>
                <a href="https://wa.me/5544997666224" target="_blank"><FaWhatsapp /></a>
            </div>

            <img src="./my_photo.jpg" alt="My photo" />
        </div>
    )
}

export default Home
