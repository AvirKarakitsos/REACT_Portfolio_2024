import styles from '../assets/styles/Main.module.css'
import photo from '../assets/images/photo-baobab.png'
import github from '../assets/images/github.png'
import twitter from '../assets/images/x-logo.jpg'
import instagram from '../assets/images/insta.png'
import gmail from '../assets/images/gmail.png'

import { useContext, useState } from 'react'
import { translate } from '../utils/common'
import { ThemeContext } from '../utils/context/ThemeContext'
import { LanguageContext } from '../utils/context/LanguageContext'
import { ThemeContextType, LanguageContextType } from '../utils/types/context'
import projects from '../utils/projects/projects.json'
import { ProjectType } from '../utils/types/project'
import Card from './Card'
import Modal from './Modal'
import Information from './Information'

function Main() {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {lang} = useContext(LanguageContext) as LanguageContextType
    const [table, setTable] = useState<ProjectType[]>([])
    const [tag, setTag] = useState("all")
    const [modal, setModal] = useState(false)

    const handleFilter = function(tag: string) {
		if(tag === "all") {
			setTable(projects)
            //console.log(projects)
		}
		else {
            console.log("Erreur!")
			// const copy = [...projects]
			// const filter = copy?.filter(element => element.category === tag)
			//setTable(filter)
		}
		setTag(tag)
	}

    return(
        <main className={`${styles["main"]} ${theme === "light" ? "bg-light-1" : "bg-darker-2"}`}>
            <div className={styles["container"]}>
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

            <Information/>

                <Modal  modal={modal} setModal={setModal}/>

                <section id="project" className="section-1 flex direction-column medium-row-gap">
                    <h2 className="text-center">{translate(lang).main.projects.subtitle}</h2>
                    <ul className={styles["project-filter"]}>
                        <li 
                            data-tag="all" 
                            className="list-filter" 
                            onClick={() => handleFilter("all")}
                            >
                            <button className={tag === "all" ? "btn-filter btn bg-green no-border" : "btn-filter btn bg-green-opacity no-border"}>{translate(lang).main.projects.all}</button>
                        </li>
                        {/* { allCategories?.map( category => <Category category={category} handleFilter={handleFilter} tag={tag} key={category._id}/>) } */}
                    </ul>
                    
                    <div className={styles["box-container"]}>
                        {/* { table.map(project => <Card key={project._id} project={project} setModal={setModal} setVideo={setVideo}/>) } */}
                        { table.map(project => <Card key={project._id} project={project} setModal= {setModal}/>) }
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main