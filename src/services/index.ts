import { User } from "../contexts/AppContext"

export const getGithubUsers = async ():Promise<User[]> => {
    const promise = await fetch('https://api.github.com/users')
    const response = await promise.json()
    return response
}