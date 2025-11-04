import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import "./styles/Global.css"
import styles from "./App.module.css"

import StartUpPage from "./pages/StartUpPage"
import Serverlayout from "./components/layout/serverlayout"
import PrivateLayout from "./components/layout/PrivateLayout"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import FormWrapper from "./components/wrapper/FormWrapper"
import AppProvider from "./providers/AppProvider"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/channels/@me" />,
  },
  {
    path: "/channels",
    children: [
      {
        // object called default children
        index: true, // index true means the element will render when path is matched exactly,
        element: <h1>/channels</h1>,
      },
      {
        element: <StartUpPage />, // this child element is without any path so it is a <layout wrapper> if any of its child matches it will wrap child eliment inside it if you provide a <outlet> in this component
        children: [
          {
            path: "@me",
            element: <PrivateLayout />,
            children: [{ path: ":dmId", element: <h1>dmContent</h1> }],
          },
          {
            path: ":serverId",
            element: <Serverlayout />,
            children: [
              { path: ":channelId", element: <h1>channelcontent</h1> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <StartUpPage />,
    children: [
      {
        path: "/login",
        element: (
          <FormWrapper>
            <LoginPage />
          </FormWrapper>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <StartUpPage />,
    children: [
      {
        path: "/register",
        element: (
          <FormWrapper>
            <RegisterPage />
          </FormWrapper>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/channels/@me" />,
  },
])

function App() {
  return (
    <>
      <AppProvider>
        <div className={styles.AppMount}>
          <RouterProvider router={router} hydrate={false}></RouterProvider>
        </div>
      </AppProvider>
    </>
  )
}

export default App
