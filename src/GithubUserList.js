import { useState } from 'react'
import { Link, Outlet } from "react-router-dom"

export function GithubUserList () {
    const [name, setName] = useState('') //vuoto di partenza
    const [user, setUser] = useState ([]) //vuoto di partenza, index 0

    const handleInputChange = (event) => {
        setName(event.target.value)
    }

    const handleAddUser = (event) => {
        setUser([...user, name]) //tutti i valori precedenti + il nuovo inserito nell'input
    }

    return (
        <div>
            <ul>
                <li>
                <Link to="/users/frances8713">User uno</Link>
                </li>
                <li>
                <Link to="/users/gianmarcotoso">User due</Link>
                </li>
            </ul>
            {/* <input onChange={handleInputChange} />
            <button type='submit' onClick={handleAddUser}>Add user</button> */}
            <Outlet />
        </div>
    )
}
