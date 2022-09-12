import React from "react";
import { Welcome } from './Welcome'
import { Container } from './Container'
import { TodoList } from "./TodoList";



export class App extends React.Component {
    render() {
        return (
          <Container title="My Application">
          <Welcome name={'Polly'}/>
          <TodoList 
            render={(items, handleRemoveTodo) => {
              return (
                items.map((item, index) => (
                    <li key={index}>{item}
                       <button value={index} onClick={handleRemoveTodo}>Remove</button> 
                    </li>))
                    ) 
                 }} />
          </Container>
        )
      }
}
