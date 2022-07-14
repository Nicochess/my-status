import { User } from "firebase/auth";
import { createContext } from "react";

type IAuthContext = {
    login: (email: string, password: string) => any
    logout: () => void
    registerUser: (form: Form) => any
    currentUser: User | null
}

export const AuthContext = createContext<IAuthContext>({
    login: (email, password) => {},
    logout: () => {},
    registerUser: (form) => {},
    currentUser: {} as User
});
