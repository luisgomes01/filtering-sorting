import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getGithubUsers } from "../services";


type User = {
    id: string | number;
    name: string
}

interface AppContextProps {
    users: User[]
}

interface Props {
    children?: ReactNode
}

export const AppContext = createContext({} as AppContextProps)

export const AppContextProvider = ({ children }: Props) => {
    const [globalState, setGlobalState] = useState({
        users: []
    })

    useEffect(() => {
        (() => {
            getGithubUsers();
        })()
    }, [])

    return <AppContext.Provider value={globalState}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)