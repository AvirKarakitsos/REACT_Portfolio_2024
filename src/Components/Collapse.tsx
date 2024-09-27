import styles from "../assets/styles/Collapse.module.css"
import { useContext } from "react"
import { ThemeContext } from "../utils/context/ThemeContext"
import { LanguageContext } from '../utils/context/LanguageContext'
import { ThemeContextType, LanguageContextType } from '../utils/types/context';
import { ProjectType } from "../utils/types/project";

type CollapseProps = {
    isOpen: boolean,
    setIsOpen: (input: boolean) => void,
    project: ProjectType
}

function Collapse({isOpen, setIsOpen, project}: CollapseProps) {
    const { theme } = useContext(ThemeContext) as ThemeContextType
    const { lang } = useContext(LanguageContext) as LanguageContextType
    
    return (
        <div className={styles.bar}>
            <button className={`border-grey ${styles.title} ${theme === "light" ? "bg-light-1" : "bg-darker-1"}`} onClick={() => setIsOpen(!isOpen)}>
                    { isOpen
                    ? <i className="fa-solid fa-chevron-up arrow"></i>
                    : <i className={styles.iconeOpen+" fa-solid fa-chevron-up arrow"}></i>
                    }
            </button>   

            <div 
                className={isOpen
                    ? `${styles.collapseOpen} ${styles.content} ${theme === "light" ? "" : "color-white"}`
                    : `${styles.content} ${theme === "light" ? "" : "color-white"}`}>
                {project.content.map((input) => 
                    (input.language === lang) && <p className={styles["box-description"]}>{input?.text}</p>)}
            </div>
        </div>
        )
    }

export default Collapse