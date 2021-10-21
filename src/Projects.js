import './custom.css';
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.div className="myskills-projects-wrapper" initial={{opacity:0}} animate={{opacity:1}}>
            <div className="w-full h-screen relative">
                <motion.h1 className="my-works-skills absolute text-gum-dark-red font-bold mb-4 md:mb-8 top-1/2 left-1/2 z-10" initial={{fontSize: "0rem"}} animate={{fontSize: "4rem"}} transition={{delay: .75}}>My Skills & Works</motion.h1>
                <div className="gradient h-full w-full relative after:absolute after:top-0 after:left-0 after:bg-gum-dark-red after:opacity-30">
                    <img src="img/skills/img.jpg" alt="My Skills and Works Banner Image" className="object-cover w-full h-full absolute top-0 left-0"/>
                </div>
            </div>
            <section className="skills w-full min-h-screen my-8">
                <h1 className="text-5xl lg:text-7xl text-gum-dark-red font-bold mb-4 md:mb-8">My Skills</h1>
                <div className="myskills flex flex-wrap sm:px-4 md:w-5/6 mx-auto w-full justify-center items-center">
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/python.png" alt="Python" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">Python</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/html.png" alt="HTML 5" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">HTML 5</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/css.png" alt="CSS 3" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">CSS 3</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/js.png" alt="Javascript" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">JavaScript</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/tailwind.png" alt="Tailwind" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">CSS Framework: Tailwind</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/bootstrap.png" alt="Bootstrap" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">CSS Framework: Bootstrap</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/react.png" alt="React Js" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">React Js</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/php.png" alt="PHP" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">PHP</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/ps.png" alt="Adobe Photoshop" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">Adobe Photoshop</h3>
                    </motion.div>
                    <motion.div className="lg:w-1/6 sm:w-1/3 w-1/4 mx-4 cursor-pointer" whileHover={{ scale:1.2 }}>
                        <img src="img/skills/ai.png" alt="Adobe Illustrator" className="object-contain w-full"/>
                        <h3 className="text-white font-semibold">Adobe Illustrator</h3>
                    </motion.div>
                </div>
            </section>

            <section className="my-projects text-white w-full p-4 bg-black my-4">
                <div className="my-projects-container">
                    <h1 className="text-5xl lg:text-7xl text-gum-dark-red font-bold">My Projects</h1>

                    <div className="projects flex flex-wrap w-full justify-center align-middle mt-4">

                        <motion.div className="project-card hover:bg-gum-dark-red bg-gum-red lg:w-1/4 w-5/6 m-4 transition-all rounded-lg cursor-pointer" whileHover={{scale:1.2}}>
                            <img src="img/works/folklorevermore-chess.jpg" alt="the folklorevermore chess" className="w-full object-contain mx-auto"/>
                            <div className="project-desc p-2">
                                <h3 className="text-xl mt-2">The folklorevermore Chess</h3>
                                <h4 className="md:text-xs text-sm">
                                    a chess game created using HTML, CSS and JavaScript (OOP, DOM Modifications, etc). Some features might not work, such as en passant move. 
                                    I honestly do not know why I named this game as 'folkloreveremore', but I think it is to show the authenticity and to show that I really 
                                    built and developed this game from scratch. created by Ara Gamaliel.
                                </h4>
                                <div className="categories flex flex-wrap w-full justify-center my-2">
                                    <span className="bg-black m-2 p-2 rounded text-xs">HTML</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">CSS</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">JavaScript</span>
                                </div>
                                <div className="links flex justify-center mt-2">
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="#" target="_blank" className="underline text-sm">Code<i class="fas fa-code ml-2"></i></a></div>
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="#" target="_blank" className="underline text-sm">Website<i class="fas fa-external-link-alt ml-2"></i></a></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="project-card hover:bg-gum-dark-red bg-gum-red lg:w-1/4 w-5/6 m-4 transition-all rounded-lg cursor-pointer" whileHover={{scale:1.2}}>
                            <img src="img/works/toDo.jpeg" alt="the toDo app" className="w-full object-contain mx-auto"/>
                            <div className="project-desc p-2">
                                <h3 className="text-xl mt-2">toDo App</h3>
                                <h4 className="md:text-xs text-sm">
                                A to-do-list application created using React Js. The user can add to do, add them in certain categories, 
                                mark them as completed/uncompleted and the user can also add new customized categories.
                                </h4>
                                <div className="categories flex flex-wrap w-full justify-center my-2">
                                    <span className="bg-black m-2 p-2 rounded text-xs">HTML</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">CSS</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">ReactJS</span>
                                </div>
                                <div className="links flex justify-center mt-2">
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://github.com/gamalielara/react-to-do-list" target="_blank" className="underline text-sm">Code<i class="fas fa-code ml-2"></i></a></div>
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://gamalielara.github.io/react-to-do-list/" target="_blank" className="underline text-sm">Website<i class="fas fa-external-link-alt ml-2"></i></a></div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="project-card hover:bg-gum-dark-red bg-gum-red lg:w-1/4 w-5/6 m-4 transition-all rounded-lg cursor-pointer" whileHover={{scale:1.2}}>
                            <img src="img/works/libshelf.jpg" alt="the toDo app" className="w-full object-contain mx-auto"/>
                            <div className="project-desc p-2">
                                <h3 className="text-xl mt-2">libSHELF App</h3>
                                <h4 className="md:text-xs text-sm">
                                A simple CRUD application to register and store our books, rate them and give them our short and full review. 
                                Right now the visitor can only view the website without changing the any data in the website. Created with PHP native.
                                </h4>
                                <div className="categories flex flex-wrap w-full justify-center my-2">
                                    <span className="bg-black m-2 p-2 rounded text-xs">HTML</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">Bootstrap CSS</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">JavaScript</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">Chart.Js</span>
                                    <span className="bg-black m-2 p-2 rounded text-xs">PHP Native</span>
                                </div>
                                <div className="links flex justify-center mt-2">
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://github.com/gamalielara/libSHELF-app" target="_blank" className="underline text-sm">Code<i class="fas fa-code ml-2"></i></a></div>
                                    <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="http://libshelf.infinityfreeapp.com/" target="_blank" className="underline text-sm">Website<i class="fas fa-external-link-alt ml-2"></i></a></div>
                                </div>
                            </div>
                            
                        </motion.div>

                        <motion.div className="project-card hover:bg-gum-dark-red bg-gum-red lg:w-1/4 w-5/6 m-4 transition-all rounded-lg cursor-pointer" whileHover={{scale:1.2}}>
                            <img src="img/works/gumrindelwald.jpg" alt="the toDo app" className="w-full object-contain mx-auto"/>
                            <div className="project-desc p-2">
                                
                            <h3 className="text-xl mt-2">gumrindelwald</h3>
                            <h4 className="md:text-xs text-sm">
                                A blog template created using Tailwindcss and Vanila Javascript. 
                            </h4>
                            <div className="categories flex flex-wrap w-full justify-center my-2">
                                <span className="bg-black m-2 p-2 rounded text-xs">HTML</span>
                                <span className="bg-black m-2 p-2 rounded text-xs">Tailwindcss</span>
                                <span className="bg-black m-2 p-2 rounded text-xs">JavaScript</span>
                            </div>
                            <div className="links flex justify-center mt-2">
                                <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://github.com/gamalielara/gumrindelwald" target="_blank" className="underline text-sm">Code<i class="fas fa-code ml-2"></i></a></div>
                                <div className="link  m-2 p-1 hover:bg-gum-red cursor-pointer rounded transition-all"><a href="https://gumrindelwald.netlify.app/" target="_blank" className="underline text-sm">Website<i class="fas fa-external-link-alt ml-2"></i></a></div>
                            </div>
                            </div>
                        </motion.div>
                        
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
 
export default Projects;