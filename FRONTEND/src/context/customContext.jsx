import { createContext } from "react";

export const CustomContext = createContext()

export const CustomContextProvider = ({children}) => {
const age = 26 

    return <CustomContext.Provider value={{age}}>{children}</CustomContext.Provider>
}
