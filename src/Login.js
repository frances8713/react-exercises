
import { useLogin } from "./useLogin"

export function Login() {
    const {data, onHandleInputChange} = useLogin();
    console.log(data)
    return ( 
        <form>
            <h3>Login</h3>
            <input value={data.username} name='username' onChange={onHandleInputChange}/>
            <input value={data.password} name='password' type='password' onChange={onHandleInputChange}/>
            <input checked={data.remember} name='remember' type='checkbox' onChange={onHandleInputChange}/>  
        </form>
    )  
} 





// ------------------------------------------------------
    // const [data, setData] = useState ({
    //     username: '',
    //     password: '',
    //     remember: false
    // })

    // const [disabled, setDisabled] = useState(true)

    // function handleInputChange (event) {
    //     const {name, value, type, checked} = event.target

    //     setData((data) => {
    //         return {
    //         ...data,
    //         [name] : type === 'checkbox' ? checked : value
    //         } 
    //     })
    // }  

// import React from "react";

// -----------------------------------------------

// export class Login extends React.Component {
//     state = {
//         username : '',
//         password : '' ,
//         remember : false
//     }

//     handleInputLoginChange = (event) => {
//         const value = event.target.value
//         const name = event.target.name
//         const type = event.target.type
//         const checked = event.target.checked

//         this.setState ({
//             [name]: type === 'checkbox' ? checked : value,
//         })
//     }

//     onLogin = () => {
//         this.props.conditions(this.state)
//     }

//     render () {
//         return (
//             <div>
//                 <h2>Form</h2>
//                 <input name = 'username' value = {this.state.username} onChange={this.handleInputLoginChange}/>
//                 <input name = 'password' type ='password' value = {this.state.password} onChange={this.handleInputLoginChange}/>
//                 <input name = 'remember' type='checkbox' checked={this.state.remember} onChange={this.handleInputLoginChange}/>
//                 <div>
//                     <button type='submit' disabled={(this.state.username === '' || this.state.password === '') ? true : false} onClick={this.onLogin}>Login</button>
//                 </div>
//             </div>

//         )
//     }
// }