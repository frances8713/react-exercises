import React from "react";
import { Welcome } from './Welcome'
import { Container } from './Container'
import { TodoList } from "./TodoList";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from './Sum'
import { ClickCounter } from "./ClickCounter";
import { Login } from "./Login"



export class App extends React.Component {
    render() {
        return (
          <div> 
          <Container title="My Application">         
          <Welcome name={'Polly'}/>
          <Login />
          <ClickCounter />
          </Container>        
          </div>
        )
      }
}
