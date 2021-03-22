import React from "react"
import "./styles/main.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from "./components/Main"
import About from "./components/About"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default App
