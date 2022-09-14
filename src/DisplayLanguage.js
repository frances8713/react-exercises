import React from "react";
import { LanguageContext } from "./LanguageContext";

const stringa = {
    en: {
        stringa: "Your choice is: English"
    },
    it: {
        stringa: "La tua scelta è: Italiano"
    }
}

export class DisplayLanguage extends React.Component {
    render () {
        return (
            <div>
                <LanguageContext.Consumer>
                   { language => {
                    return <h1>{stringa[language].stringa}</h1>
                   } }
                </LanguageContext.Consumer>
            </div>
        )
    }
}