import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from "./constants/routes"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"



export default function App() {

  const user = null

  return (
  <Router>
    <Routes>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}></IsUserRedirect>
      <Route exact path={ROUTES.SIGNUP} element={<Signup />} />
      <Route exact path={ROUTES.BROWSE} element={<Browse />} />
      <Route exact path={ROUTES.HOME} element={<Home />} />
    </Routes>
  </Router>
  )
}


//      <Route exact path={ROUTES.SIGNIN} element={<Signin />} />