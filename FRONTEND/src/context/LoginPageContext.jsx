import { createContext, useState } from "react"
import { useLogin } from "../hooks/apiHooks/useAuthQueries";

export const LoginPageContext = createContext()

export const LoginPageContextProvider = ({ children }) => {
  const { mutate: login, isPending, isError, error } = useLogin();
  const [Errors, setErrors] = useState({})
  const [LoginForm, setLoginForm] = useState({
    login: "ankit@gmail.com",
    password: "abcd",
  })

  function handleInputChange(e) {
    const { name, value } = e.target
    setLoginForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmitLoginForm(e) {
    e.preventDefault()
    if (Object.keys(Errors).length) return
    login(LoginForm, {
      onError: (err) => {
        console.log(error);
      }
    } )
  }

  const value = { handleSubmitLoginForm, handleInputChange, LoginForm,Errors }

  return (
    <LoginPageContext.Provider value={value}>
      {children}
    </LoginPageContext.Provider>
  )
}
