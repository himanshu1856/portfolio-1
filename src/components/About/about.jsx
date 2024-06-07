import { useState } from "react"

import SwitchHeadings from './SwitchHeadings'
import Experience from './Experience'
import Skills from './Skills'
import ContactMe from "./ContactMe"

export default function About() {
    const [activeComponent, setActiveComponent] = useState('experience');

    const renderComponent = () => {
        switch (activeComponent) {
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
        <div className="bg-gray-600 h-full p-5 rounded-lg w-full">
            <div className="w-full h-10 rounded-lg flex items-center">
                <SwitchHeadings switchComponents={switchComponents} currentComponent={activeComponent} />
            </div>
            <div className="rounded-lg mr-2 w-full">
                {renderComponent()}
            </div>
        </div>
    );
}



