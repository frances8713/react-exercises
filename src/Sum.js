

export function Sum ({numbers = [3, 5, 7]}) {
    return <h1>{numbers.reduce((a , b) => a + b)}</h1>
}