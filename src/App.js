import React from "react";
import { Welcome } from './Welcome'
import { Counter } from './Counter'

export class App extends React.Component {
    render() {
        return (
            <div>
                < Welcome name = "John" age={35}/>
                < Counter initialValue = {10} incrementInterval = {500} incrementAmount = {5}/>  
            </div>
        )
       
    }
}
