import SkillsCard from './SkillsCard'

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

export default Skills