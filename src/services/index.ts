export const getGithubUsers = async () => {
    const promise = await fetch('https://api.github.com/users')
    const response = await promise.json()
    return response
}