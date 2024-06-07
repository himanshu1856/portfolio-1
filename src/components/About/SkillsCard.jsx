const SkillsCard = ({title,skills}) => {
    return(
        <div className="text-center w-42 rounded-lg h-full bg-gray-200 p-2">
            <p className="text-emerald-700 font-semibold underline underline-offset-4">{title}</p>
            <div className="mt-5">
                <ul className="font-mono text-lg">
                    {skills.map((skill,index)=>{
                        return(
                            <li key={index}>{skill}</li>
                        ); 
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SkillsCard