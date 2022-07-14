import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { createContext } from "react";

type IAuthContext = {
    login: (email: string, password: string) => any
    logout: () => void
    registerUser: (form: Form) => any
    currentUser: User | null
    addFriend: (friendList: string[]) => void
    userData: UserData | DocumentData | null
    switchStatus: (status: boolean) => void
}

export const AuthContext = createContext<IAuthContext>({
    login: (email, password) => {},
    logout: () => {},
    registerUser: (form) => {},
    currentUser: {} as User,
    addFriend: (friendList) => {},
    userData: {} as UserData | DocumentData,
    switchStatus: (status: boolean) => {}
});
