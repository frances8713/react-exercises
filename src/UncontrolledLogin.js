import React from "react";


export class UncontrolledLogin extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({username, password,remember})
        
    }

    render () {
        return (
            <div>
                <h3>Uncotrolled Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <input name = 'username'/>
                    <input name = 'password' type = 'password'/>
                    <input name = 'remember' type = 'checkbox'/>
                    <div>
                        <button type = 'submit'>Login</button>
                        <button type = 'reset'>Reset</button>
                    </div>

                    
                </form>
            </div>
        )
    }
}
