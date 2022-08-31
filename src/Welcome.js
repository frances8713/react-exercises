import React from "react";
import { Age } from './Age'


export class Welcome extends React.Component {
    render () {
        return (
        <div>
            <p>Welcome, {this.props.name}!</p>
            {(this.props.age > 18 && this.props.age < 65 && this.props.name === "John") && <Age age={this.props.age}/>}
        </div>
        )
    }
}

//Se in App lasciavo Polly si sarebbe visualizzato solo il <p> con Polly e non l'età perché l'ultima condizione non sarebbe stata avvalorata