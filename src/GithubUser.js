import { useGithubUser } from "./useGithubUser"

export function GithubUser ({username}) {
    const {data, loading, error, onFetchUser} = useGithubUser(username)

    function handleFetchUser() {
        onFetchUser(username)
    }

return (
        <div>
            <button onClick={handleFetchUser}>Load user</button>
            {loading && <h2>loading...</h2>}
            {error && <h2>There's an error</h2>}
            {data && <h2>{data.login}</h2>} 
        </div>
)
}