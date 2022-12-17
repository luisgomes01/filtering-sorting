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

export type GlobalState = {
  users: User[];
  filteredUsers: User[];
};

export interface AppContextProps {
  globalState: GlobalState;
  setGlobalState: React.Dispatch<
    React.SetStateAction<{
      users: User[];
      filteredUsers: User[];
    }>
  >;
}

interface Props {
  children?: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

export const AppContextProvider = ({ children }: Props) => {
  const [globalState, setGlobalState] = useState<{
    users: User[];
    filteredUsers: User[];
  }>({
    users: [] as User[],
    filteredUsers: [] as User[],
  });

  useEffect(() => {
    (async () => {
      const data = await getGithubUsers();
      setGlobalState((prev) => ({
        ...prev,
        users: data,
        filteredUsers: data,
      }));
    })();
  }, []);

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
