import { useState } from 'react'
import { GithubUser } from './GithubUser'

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
                {user.map((value, index) => <li key={value + index}><GithubUser username={value}/></li>)}
            </ul>
            <input onChange={handleInputChange} />
            <button type='submit' onClick={handleAddUser}>Add user</button>
        </div>
    )
}
