import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response => response.json()))


export function useGithubUser (username) {
    const { data, error} = useSWR(username ? `https://api.github.com/users/${username}`: null, fetcher)


 return {
    users: data, 
    error, 
    loading: !data && !error
    }
    
}











// const [data, setData] = useState(null)
//     const [loading, setLoad] = useState(false)
//     const [error, setError] = useState(null)

// async function fetchGithubUser(username){
//     setLoad(true)
//     setError(null)
// try {
//     const response = await fetch(`https://api.github.com/users/${username}`)
//     const json = await response.json()

//     if (response.status !== 200) {
//         setError(new Error())
//     }
//     setData(json)
//     console.log(json)

//     } catch(error) {
//     setError(error)
//     setData(null)
//     } finally {
//    setLoad(false) 
//     }
// }