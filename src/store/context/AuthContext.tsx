import { User } from "firebase/auth";
import { createContext } from "react";

type IAuthContext = {
  login: (email: string, password: string) => any;
  logout: () => void;
  registerUser: (form: Form) => any;
  currentUser: User | null;
  addFriend: (newFriend: string) => void;
  switchStatus: (status: boolean) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  forgotPassword: (email: string) => void;
};

export const AuthContext = createContext<IAuthContext>({
  login: (email, password) => {},
  logout: () => {},
  registerUser: (form) => {},
  currentUser: {} as User,
  addFriend: (newFriend: string) => {},
  switchStatus: (status: boolean) => {},
  loading: true,
  setLoading: () => {},
  forgotPassword: (email: string) => {},
});
