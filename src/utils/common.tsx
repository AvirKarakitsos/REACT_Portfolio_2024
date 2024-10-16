import dataFr from './lang/fr.json'
import dataEn from './lang/en.json'

//Data language
export function translate(input: string) {
    let data = null
    if(input === "fr") data = dataFr
    else data = dataEn
    return data
}

//export const url = "http://localhost:5173/"
export const url = "http://arnocotsoyannis.onrender.com/"