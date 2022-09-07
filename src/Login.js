import React from "react";


export class Login extends React.Component {
    state = {
        username : '',
        password : '' ,
        remember : false
    }

    handleInputLoginChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState ({
            [name]: type === 'checkbox' ? checked : value,
        })
    }

    //inizialmente avevo provato a mettere la condizione del disabled all'interno del onLogin ma non riuscivo a venirne a capo. Ho trovato poi questa soluzione 
    onLogin = () => {
        this.props.conditions(this.state)
    }

    render () {
        return (
            <div>
                <h2>Form</h2>
                <input name = 'username' value = {this.state.username} onChange={this.handleInputLoginChange}/>
                <input name = 'password' type ='password' value = {this.state.password} onChange={this.handleInputLoginChange}/>
                <input name = 'remember' type='checkbox' checked={this.state.remember} onChange={this.handleInputLoginChange}/>
                <div>
                    <button type='submit' disabled={(this.state.username === '' || this.state.password === '') ? true : false} onClick={this.onLogin}>Login</button>
                </div>
            </div>

        )
    }
}