import React from "react";


export class TodoList extends React.Component {
    state = {
        items : [
            'one', 'two', 'three', 'four'
        ],
        addItem : ''
    }
    
    handleInput = (event) => {
        this.setState ({
            addItem : event.target.value
        })
    }

    handleAddItems = (event) => {
        event.preventDefault()
        
        this.setState ({
            items : [...this.state.items, this.state.addItem]
        })
    }


    render () {

        return (
            <div>
                <h3>Todo List</h3>
                <ul>
                    {this.state.items.map((item) => (<li>{item}</li>))}
                </ul>
                <div>
                    <input value = {this.state.addItem} onChange = {this.handleInput}></input>
                    <button onClick = {this.handleAddItems}></button>
                </div>
            </div>
        )
    }
}