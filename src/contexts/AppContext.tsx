import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getGithubUsers } from "../services";

export type User = {
  id: string | number;
  name: string;
  login: string;
  avatar_url: string;
};

export interface AppContextProps {
  globalState: {users: User[];}
  setGlobalState: (val: any) => void
}

interface Props {
  children?: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

export const AppContextProvider = ({ children }: Props) => {
  const [globalState, setGlobalState] = useState({
    users: [],
  });

  useEffect(() => {
    (async () => {
      const data = await getGithubUsers();
      setGlobalState((prev) => ({
        ...prev,
        users: data,
      }));
    })();
  }, []);

  return (
    <AppContext.Provider value={{globalState, setGlobalState}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
