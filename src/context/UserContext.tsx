import { createContext } from "react"

export interface User {

  nombreUsuario: String,
  rol: String
}

export const UserContext = createContext<User | undefined>(undefined);

