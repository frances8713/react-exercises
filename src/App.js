import React from "react";
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from './Login'
import { ClickCounter } from './ClickCounter'
import { UncontrolledLogin } from "./UncontrolledLogin";


export class App extends React.Component {
    render() {
        return (
            <div>
                 < InteractiveWelcome />
                 < UncontrolledLogin />
            </div> 
        ) 
      }
}
