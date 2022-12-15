import { User } from "../contexts/AppContext";

export const filterUsers = (prev: {users: User[]}, currentValue: string) => {
  return prev.users.filter((user) => {
        return (
            user.login.toLowerCase().includes(currentValue) ||
            user.id.toString().includes(currentValue)
        );
    })
}
