import React from "react";
import { useState } from "react"
import { Container } from './Container'
import { GithubUser } from './GithubUser'
import { HookCounter } from './HookCounter'
import { CarDetails } from './CarDetalis'
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";


export function App () {
 const [language, setLanguage] = useState('en')

 function handleChangeLanguage(event) {
     setLanguage(event.target.value)
 }
        return (
          <div> 
            <select value='language' onChange={handleChangeLanguage}>
              <option value='en'>English</option>
              <option value='it'>Italiano</option>
            </select>
          <LanguageContext.Provider value={language}>
          <Container title="My Application">  
          <DisplayLanguage />
          </Container>  
          </LanguageContext.Provider>      
          </div>
        )
      }
