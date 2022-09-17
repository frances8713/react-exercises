import { useEffect, useState } from 'react'


export function GithubUser ({username}) {

const [data, setData] = useState(null)
const [loading, setLoad] = useState(false)
const [error, setError] = useState(null)

async function fetchGithubUser(username){
    setLoad(true)
    setError(null)
try {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const json = await response.json()

    setData(json)
    console.log(json)

    } catch(error) {
    setError(error)
    setData(null)
    } finally {
   setLoad(false) 
    }
}

useEffect (() => {
    fetchGithubUser(username)
}, [username])

return (
        <div>
            {loading && <h2>loading...</h2>}
            {error && <h2>There's an error</h2>}
            {data && <h2>{data.login}</h2>} 
        </div>
)
}