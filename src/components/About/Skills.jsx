import SkillsCard from './SkillsCard'

function Skills() {
    const fronEnd = ["HTML", "CSS", "JavaScript", "BootStrap", "Tailwind", "Scss", "Jquery"];
    const backEnd = ["Node js", "Express js", "REST Api", "Firebase"];
    const cloudPlatform = ["AWS"];
    const devTools = ["VS Code", "Git/Github", "Docker"]; 
    const mobileApps = ["React Native"]
    return (
        <>
            <div className="flex flex-wrap justify-between  pt-5 w-full h-full" >
                <SkillsCard title={"Front End"} skills={fronEnd}/>
                <SkillsCard title={"Back End"} skills={backEnd}/>
                <SkillsCard title={"Dev Tools"} skills={devTools}/>
                <SkillsCard title={"Cloud"} skills={cloudPlatform}/>
                <SkillsCard title={"Mobile Apps"} skills={mobileApps}/>
            </div>
        </>
    )
}

export default Skills