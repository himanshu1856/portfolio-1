import { useState } from "react";

export default function About(){
    const [activeComponent, setActiveComponent] = useState('introduction');

    const renderComponent = () => {
        switch(activeComponent){
            case 'introduction':
                return <Introduction/>;
            case 'experience':
                return <Experience/>;
            case 'skills':
                return <Skills/>;
            case 'contact':
                return <ContactMe/>;
            default:
                return null;
        }
    };

    const switchComponents = (component) => {
        let newValue = component.toLowerCase();
        setActiveComponent(newValue);
    };

    return(
        <div className="bg-gray-600 h-full p-5 rounded-lg flex">
            <div className="w-3/4 rounded-lg mr-2">
                {renderComponent()} 
            </div>
            <div className="w-1/4  bg-slate-800 h-full p-5 rounded-lg">
                <SwitchHeadings switchComponents={switchComponents} />
            </div>
        </div>
    );
}

function SwitchHeadings({switchComponents}){
    return(
        <>
            <h1 className="underline underline-offset-8 text-center mb-10 text-slate-200 font-semibold leading-relaxed font-mono">Switch Tabs 👇</h1>
            <ul className="list-none text-xl leading-relaxed text-slate-400 ">
                <li className="hover:text-slate-100 "
                onClick={()=>{switchComponents("introduction")}}
                >Introduction</li>
                <li className="hover:text-slate-100"
                onClick={()=>{switchComponents("experience")}}
                >Experience</li>
                <li className="hover:text-slate-100"
                onClick={()=>{switchComponents("skills")}}
                >Skills</li>
                <li className="hover:text-slate-100"
                onClick={()=>{switchComponents("contact")}}
                >Contact Me</li>
                
            </ul>
        </>
    )
}

function Introduction(){
    return(
        <>
            <h1 className="text-2xl tracking-wider">Introduction</h1>
        </>
    )
}

function Experience(){
    return(
        <>
            <h1 className="text-2xl tracking-wider">Experience</h1>
        </>
    )
}

function Skills(){
    return(
        <>
            <h1 className="text-2xl tracking-wider">Skills</h1>
        </>
    )
}

function ContactMe(){
    return(
        <>
            <h1 className="text-2xl tracking-wider">Contact Me</h1>
        </>
    )
}