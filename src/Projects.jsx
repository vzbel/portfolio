import ProjectCard from "./ProjectCard.jsx"

function Projects(){
    return (
        // Section container
        <section className="bg-neutral-900 min-h-screen flex items-center p-10" id="projects">
            {/* Projects Section */}
            <div className="text-white w-fit mx-auto h-fit">
                <h2 className="text-4xl mb-5 font-medium">Projects</h2>
                <div className="flex flex-col lg:flex-row min-w-fit max-w-7xl gap-10 flex-wrap">
                    <ProjectCard 
                        url="https://restaurante-mexicano.netlify.app/"
                        thumbnail="/SaborMexicano.png"
                        name="Sabor Mexicano"
                        description="Sabor Mexicano is a static restaurant website featuring a 
                        vibrant hero section and a simple menu layout inspired by 
                        the bold essence of Mexican cuisine. Built with React and styled with Tailwind CSS,
                        it demonstrates a focus on creating responsive, user-friendly interfaces with clean, efficient code."
                        tagNames={["React", "TailwindCSS"]}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects