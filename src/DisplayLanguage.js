import { LanguageContext } from "./LanguageContext";
import { useContext} from "react"

 
    const strings = {
        en: {
            current_lang: "Your choice is: English"
        },
        it: {
            current_lang: "La tua scelta è: Italiano"
        }
    }
    export function DisplayLanguage () {

        const language = useContext(LanguageContext)

        return (
            <h3>{strings[language]['current_lang']}</h3>
        )

    }
