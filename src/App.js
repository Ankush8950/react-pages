import React from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import Features from "./Component/Features/Feature"
import Navbar from './Component/Navbar/Navbar'
import About from './Component/About/About'
import Service from "./Component/Service/Service"
import Gallery from "./Component/Gallery/Gallery";
import Contact from "./Component/Contact/Contact"

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
          <Route exact path="/" component={Features}/>
          <Route path="/About" component={About}/>
          <Route path="/Service" component={Service} /> 
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Contact" component={Contact} />
          <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App;
