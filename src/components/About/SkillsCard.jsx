const SkillsCard = ({title,skills}) => {
    return(
        <div className="text-center w-full lg:w-52 rounded-lg h-fit bg-gray-200 p-2 mb-5 shadow-md shadow-orange-300">
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