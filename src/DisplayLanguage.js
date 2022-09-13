import React from "react";
import { LanguageContext } from "./LanguageContext";


export class DisplayLanguage extends React.Component {
    render () {
        return (
            <div>
                <LanguageContext.Consumer>
                   { language => {
                    return (
                        <div>
                            <p className="language">La lingua selezionata è: <span>{language}</span></p>
                        </div>
                    )
                   } }
                </LanguageContext.Consumer>
            </div>
        )
    }
}
