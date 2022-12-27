import { User } from "../contexts/AppContext";

export const filterUsers = (users: User[], searchValue: string) => {
  return users.filter((user) => {
        return (
            user.login.toLowerCase().includes(searchValue) ||
            user.id.toString().includes(searchValue)
        );
    })
}

export const sortUsers = (users: User[], sortValue: string) => {
    return users.sort((a, b) => {
        return a[sortValue] > b[sortValue] ? -1 : 1
    })
}