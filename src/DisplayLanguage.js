import React from "react";
import { LanguageContext } from "./LanguageContext";

const stringa = {
    en: {
        stringa: "You choise is: English"
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
                    return <p>{stringa[language].stringa}</p>
                   } }
                </LanguageContext.Consumer>
            </div>
        )
    }
}