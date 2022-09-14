

export function Sum ({numbers = [3, 4, 6, 8]}) {
    return <h1>{numbers.reduce((a , b) => a + b)}</h1>
}