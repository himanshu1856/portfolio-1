function SwitchHeadings({ switchComponents, currentComponent }) {
    const headingText = ["Experience", "Skills", "Contact"];
    return (
        <>
            <ul className="list-none text-xl leading-relaxed text-slate-400 flex justify-between w-full">
                {
                    headingText.map((text, index) => {
                        let customClass = currentComponent.toLowerCase() === text.toLowerCase() ? "text-slate-100 font-semibold" : "hover:text-slate-300";
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

export default SwitchHeadings