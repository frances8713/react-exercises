import { useGithubUser } from "./useGithubUser"

export function GithubUser ({username}) {
    const {data, loading, error} = useGithubUser(username)
return (
        <div>
            {loading && <h2>loading...</h2>}
            {error && <h2>There's an error</h2>}
            {data && <h2>{data.login}</h2>} 
        </div>
)
}