import styles from '../assets/styles/Main.module.css'
import photo from '../assets/images/photo-baobab.png'
import github from '../assets/images/github.png'
import twitter from '../assets/images/x-logo.jpg'
import instagram from '../assets/images/insta.png'
import gmail from '../assets/images/gmail.png'

import { useContext } from 'react'
import { translate } from '../utils/common'
import { ThemeContext } from '../utils/context/ThemeContext'
import { LanguageContext } from '../utils/context/LanguageContext'
import { ThemeContextType, LanguageContextType } from '../utils/types/context'


function Main() {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {lang} = useContext(LanguageContext) as LanguageContextType

    return(
        <main className={styles["main-container"]}>
            <section className={styles["top-container"]}>
                <div className="relative">
                    <div className={`${styles["frame-left"]} absolute ${theme === "light" ? "border-black" : "border-white"}`}></div>
                    <img className= {`${styles["image-left"]} relative`}  src={photo} alt="Allée de baobabs à Madagascar"/>
                </div>
                <div className={styles["div-right"]}>
                    <h1 className={styles["title"]}>Arno Cotsoyannis</h1>
                    <h2 className={styles.subtitle}>{translate(lang).main.part1.subtitle}</h2>
                    <ul className={`${styles["links-container"]} no-bullet relative`}>
                        <li className={`${styles["link-1"]} absolute`}><a href="https://github.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer"><img height={30} width={30} className="border-cercle" src={github} alt="lien github"/></a></li>
                        <li className={`${styles["link-2"]} absolute`}><a href="https://www.instagram.com/avir.karakitsos" target="_blank" rel="noopener noreferrer"><img height={30} width={30} className="border-cercle" src={instagram} alt="lien instagram"/></a></li>
                        <li className={`${styles["link-3"]} absolute`}><a href="https://twitter.com/AvirKarakitsos" target="_blank" rel="noopener noreferrer"><img height={30} width={30} className="border-cercle" src={twitter} alt="lien twitter"/></a></li>
                        <li className={`${styles["link-4"]} absolute`}><img height={30} width={30} className="border-cercle" onClick={() => alert('arnocotso8@gmail.com')} src={gmail} alt="email"/></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Main