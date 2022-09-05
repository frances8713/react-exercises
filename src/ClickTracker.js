import React from "react";


export class ClickTracket extends React.Component {
    state = {
        clickedButton : ''
    }


showClickedButton = (event) => {
    this.setState ({ clickedButton : event.target.name})
}

render () {
    return (
        <div>
            <h1>L'ultimo bottone premuto è: {this.state.clickedButton}</h1>
            <button name="button 1" onClick={this.showClickedButton}>Button 1</button>
            <button name="button 2" onClick={this.showClickedButton}>Button 2</button>
            <button name="button 3" onClick={this.showClickedButton}>Button 3</button>
        </div>
    )
}

}