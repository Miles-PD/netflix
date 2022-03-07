import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {Switch} from "react-router"
import { Home, Browse, SignIn, SignUp } from "./pages"
import * as ROUTES from "./constants/routes"
import { IsUserRedirect, ProtectedRoute} from "./helpers/routes"
import { useAuthListener } from "./hooks"



export default function App() {

  const { user } = useAuthListener()
  console.log(user)

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}


