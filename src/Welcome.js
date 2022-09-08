import React from "react";
import { Age } from './Age'
import { Login } from "./Login";


export class Welcome extends React.Component {
    render () {
        return (
        <div className="welcome">
            <p>Welcome, {this.props.name}!</p>
            <Login />
        </div>
        )
    }
}
