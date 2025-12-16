const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center text-[#EBEBEB] mt-8">
            <h2 className="text-2xl mb-5">Projetos</h2>

            <div className="border-1 border-white">
                <img src="" alt="Project Image" />

                <div>
                    <h2>Project Name</h2>

                    <p>Project description Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates velit delectus provident eveniet sapiente aliquam quos laudantium, deserunt qui, hic maiores cum cupiditate quasi, fugit dolor. Enim, amet iusto.</p>

                    <div>
                        <span>Tag #1</span>
                        <span>Tag #2</span>
                        <span>Tag #3</span>
                        <span>Tag #4</span>
                    </div>
                </div>

                <nav>
                    <a href="#" target="_blank">Github</a>
                    <a href="#" target="_blank">Live Demo</a>
                </nav>
            </div>
        </div>
    )
}

export default Projects
