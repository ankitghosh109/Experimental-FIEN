import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { ClickTrapContainerContextProvider } from "../context/ClickTrapContainerContext"
import { RegisterPageContextProvider } from "../context/RegisterPageContext"
import { LoginPageContextProvider } from "../context/LoginPageContext"

function AppProvider({ children }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ClickTrapContainerContextProvider>
        <RegisterPageContextProvider>
          <LoginPageContextProvider>{children}</LoginPageContextProvider>
        </RegisterPageContextProvider>
      </ClickTrapContainerContextProvider>
    </QueryClientProvider>
  )
}

export default AppProvider
