import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count : this.props.initialValue
    }

    counterIncrement = () => {
        this.setState (state => {
            return {
                count : state.count + this.props.incrementAmount
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.counterIncrement}>Incrementa</button>
            </div>
        )
    }
}