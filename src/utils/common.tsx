import dataFr from './lang/fr.json'
import dataEn from './lang/en.json'
import { ProjectType } from './types/project'

//Data language
export function translate(input: string) {
    let data = null
    if(input === "fr") data = dataFr
    else data = dataEn
    return data
}

export function sortByDate(table: ProjectType[]) {
    table.sort((a, b) => {

        const [monthA, yearA] = a.date.split("-").map(Number);
        const [monthB, yearB] = b.date.split("-").map(Number);
      
        return yearA - yearB || monthA - monthB;
      });

    return table
}
//export const url = "http://localhost:5173/"
export const url = "https://arnocotsoyannis-v2.onrender.com/"