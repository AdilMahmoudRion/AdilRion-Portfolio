import React from "react";
import "./App.css";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navigation from "./Components/Pages/Navigation/Navigation";
import About from "./Components/Pages/About/About";
import Service from "./Components/Pages/Service/Service";
import Projects from "./Components/Pages/Projects/Projects";
import Blog from "./Components/Pages/Blog/Blog";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <div className="adilrionWebBody">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/*"></Route>
        </Switch>
      </Router>
      </div>
  );
  };
  export default App;