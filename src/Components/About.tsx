import { translate } from "../utils/common"
import { useContext } from "react"
import { LanguageContext } from "../utils/context/LanguageContext"
import { LanguageContextType } from "../utils/types/context"

function About() {
    const {lang} = useContext(LanguageContext) as LanguageContextType
    
    return(
        <>
            <h2 className="subtitle">{translate(lang).main.about.subtitle}</h2>
            <p className="section-4">{translate(lang).main.about.content_1}</p>
            <p className="section-4">{translate(lang).main.about.content_2}</p>
        </>
    )
}

export default About