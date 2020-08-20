import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/projects"
import Resume from "./pages/resume"
import Main from "./pages/main"

import './App.css';
// import "./components/card/node_modules/react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/project" component={Projects}/>
          <Route exact path="/resume" component={Resume}/>
        </Switch>
       
      </div>
    </Router>
  )
}

export default App;
