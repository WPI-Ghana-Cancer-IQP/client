import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <div>
                <TopBar/>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
