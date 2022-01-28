import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blogs/Blog";
import Service from "./components/Services/Service";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/course" component={Service} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
          </Switch>
    </>
  );
} 
export default App;
