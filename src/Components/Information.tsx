import styles from "../assets/styles/Information.module.css"
import About from "./About"
import Skills from "./Skills"
import { translate } from "../utils/common"
import { useContext, useState } from "react"
import { LanguageContext } from "../utils/context/LanguageContext"
import { LanguageContextType } from "../utils/types/context"

function Information() {
    const [tab, setTab] = useState("about")
    const {lang} = useContext(LanguageContext) as LanguageContextType

    return(
        <section className={styles.container}>
            <ul className={styles.list}>
                <li className={tab === "about" ? styles.itemSelected : styles.item} onClick={() => setTab("about")}>{translate(lang).main.about.tab}</li>
                <li className={tab === "skills" ? styles.itemSelected : styles.item} onClick={() => setTab("skills")}>{translate(lang).main.skills.tab}</li>
            </ul>
            <div className={`relative ${tab === "about" ? styles.contentAbout : styles.content}`}>
                <About tab={tab}/>
                <Skills tab={tab}/>
            </div>
        </section>
    )
}

export default Information