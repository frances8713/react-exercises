import React from "react";
import { Welcome } from './Welcome'
import { Container } from './Container'
import { TodoList } from "./TodoList";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from './Sum'
import { ClickCounter } from "./ClickCounter";



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
          <Container title="My Application">         
          <Welcome name={'Polly'}/>
          <ClickCounter />
          </Container>        
          </div>
        )
      }
}
