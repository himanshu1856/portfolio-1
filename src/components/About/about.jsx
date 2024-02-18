import { useState } from "react";
import SkillsCard from "../Skills/skillsCard";

export default function About() {
    const [activeComponent, setActiveComponent] = useState('introduction');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'introduction':
                return <Introduction />;
            case 'experience':
                return <Experience />;
            case 'skills':
                return <Skills />;
            case 'contact':
                return <ContactMe />;
            default:
                return null;
        }
    };

    const switchComponents = (component) => {
        let newValue = component.toLowerCase();
        setActiveComponent(newValue);
    };

    return (
        <div className="bg-gray-600 h-full p-5 rounded-lg flex">
            <div className="w-3/4 rounded-lg mr-2">
                {renderComponent()}
            </div>
            <div className="w-1/4  bg-slate-800 h-full p-5 rounded-lg">
                <SwitchHeadings switchComponents={switchComponents} currentComponent={activeComponent} />
            </div>
        </div>
    );
}

function SwitchHeadings({ switchComponents, currentComponent }) {
    const headingText = ["Introduction", "Experience", "Skills", "Contact"];
    return (
        <>
            <h1 className="underline underline-offset-8 text-center mb-10 text-slate-200 font-semibold leading-relaxed font-mono">Switch Tabs 👇</h1>
            <ul className="list-none text-xl leading-relaxed text-slate-400 ">
                {
                    headingText.map((text, index) => {
                        let customClass = currentComponent.toLowerCase() === text.toLowerCase() ? "text-slate-100" : "hover:text-slate-300";
                        return (
                            <li key={index} className={customClass}
                                onClick={() => { switchComponents(text) }}
                            >{text}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

function Introduction() {
    return (
        <>
            <h1 className="text-2xl text-teal-300 opacity-70 tracking-wider">Introduction</h1>
            <p className="mt-5 text-xl text-gray-400 leading-relaxed tracking-wider font-mono">
                With a steadfast dedication to crafting exceptional digital experiences and a proven track record in <span className="text-gray-100">Full Stack web development</span> ,
                I am an accomplished professional specializing in the <span className="text-gray-100"> MERN </span>(MongoDB, Express.js, React.js, Node.js) stack.
                Over the past <span className="text-gray-100"> 3 years </span>, I have honed my skills and expertise, delivering robust solutions that drive innovation and propel businesses forward in the ever-evolving landscape of technology.
            </p>

        </>
    )
}

function Experience() {
    return (
        <>
            <h1 className="text-2xl text-teal-300 opacity-70 tracking-wider">Experience</h1>
        </>
    )
}

function Skills() {
    const fronEnd = ["HTML", "CSS", "JavaScript", "BootStrap", "Tailwind", "Scss", "Jquery"];
    const backEnd = ["Node js", "Express js", "REST Api"];
    const cloudPlatform = ["AWS"];
    const devTools = ["VS Code", "Git/Github", "Docker"]; 
    return (
        <>
            <h1 className="text-2xl text-teal-300 opacity-70 tracking-wider">Skills</h1>
            <div className="grid grid-cols-4 gap-4 pt-5 p-10 w-full h-full overflow-auto" >
                <SkillsCard title={"Front End"} skills={fronEnd}/>
                <SkillsCard title={"Back End"} skills={backEnd}/>
                <SkillsCard title={"Dev Tools"} skills={devTools}/>
                <SkillsCard title={"Cloud"} skills={cloudPlatform}/>
            </div>
        </>
    )
}

function ContactMe() {
    return (
        <>
            <h1 className="text-2xl text-teal-300 opacity-70 tracking-wider">Contact Me</h1>
            <form class="w-full pt-10">
                <div class="md:flex md:items-left mb-6">
                    <div className="w-32">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Full Name
                        </label>
                        <br />
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="text" placeholder="Type your full name...." />
                    </div>
                </div>
                <div class="md:flex md:items-left mb-6">
                    <div className="w-32">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-message">
                            Message
                        </label>
                        <br />
                    </div>
                    <div class="md:w-2/3    ">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-48 py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-teal-500" id="inline-message" type="text" placeholder="Write your message...." />
                    </div>
                </div>
                <div class="md:ps-32 w-full">
                    <button class="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </>
    )
}