import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from "./constants/routes"



export default function App() {
  return (
  <Router>
    <Routes>
      <Route exact path={ROUTES.BROWSE} element={<Browse />} />
      <Route exact path={ROUTES.SIGNIN} element={<Signin />} />
      <Route exact path={ROUTES.SIGNUP} element={<Signup />} />
      <Route exact path={ROUTES.HOME} element={<Home />} />
    </Routes>
  </Router>
  )
}


