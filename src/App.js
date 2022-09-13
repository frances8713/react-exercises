import React from "react";
import { Welcome } from './Welcome'
import { Container } from './Container'
import { TodoList } from "./TodoList";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";



export class App extends React.Component {
    state = {
      language: 'en'
    }

    handleLanguageChange = (event) => {
       this.setState ({
        language : event.target.value 
       })
    }

    render() {
        return (
          <div>
            <select value={this.state.language} onChange={this.handleLanguageChange}>
              <option value="English">ENGLISH</option>
              <option value="Italiano">ITALIANO</option>
            </select>
          <LanguageContext.Provider value={this.state.language}>  
          <Container title="My Application">
          <DisplayLanguage />
          <Welcome name={'Polly'}/>
          </Container> 
          </LanguageContext.Provider>
          </div>
        )
      }
}
