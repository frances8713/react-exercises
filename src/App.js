import React from "react";
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { ClickCounter } from './ClickCounter'

export class App extends React.Component {
    render() {
        return (
            <div>
                < Welcome name = "John" age={35}/>
                < ClickCounter initialValue = {10} incrementAmount = {5}/>  
            </div>
        )
        
    }
}
