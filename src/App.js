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
         <Route path={process.env.PUBLIC_URL} components={Main}/>
          <Route exact path="/react-portfolio" component={Main}/>
          <Route exact path="/" component={Main}/>

          <Route exact path="/project" component={Projects}/>
          <Route exact path="/resume" component={Resume}/>
        </Switch>
       
      </div>
    </Router>
  )
}

export default App;
