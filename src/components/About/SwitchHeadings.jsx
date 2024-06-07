function SwitchHeadings({ switchComponents, currentComponent }) {
    const headingText = ["Experience", "Skills", "Contact"];
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

export default SwitchHeadings