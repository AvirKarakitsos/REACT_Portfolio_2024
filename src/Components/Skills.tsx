import { translate } from "../utils/common"
import { useContext } from "react"
import { LanguageContext } from "../utils/context/LanguageContext"
import { LanguageContextType } from "../utils/types/context"

function Skills() {
    const {lang} = useContext(LanguageContext) as LanguageContextType
    
    return(
        <>
            <h2 className="subtitle">{translate(lang).main.skills.subtitle}</h2>
            <ul>
                <li>test</li>
            </ul>
        </>
    )
}

export default Skills