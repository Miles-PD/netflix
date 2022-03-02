import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { FaqsContainer } from "./containers/faqs"
import { FooterContainer } from "./containers/footer"
import { JumbotronContainer } from "./containers/jumbotron"
import * as ROUTES from "./constants/routes"

export function AppHome() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
     </>
  )
}

export default function App() {
  return (
  <Router>
    <Routes>
      <Route exact path={ROUTES.HOME} element={<AppHome />}>

      </Route>
    </Routes>
  </Router>
  )
}


