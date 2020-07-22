import React from 'react';
import './App.css';
import Employees from "./components/Employees";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
        <div className='header'>
            <NavBar/>
        </div>
        <Route path='/main' render={() => < Main/>}/>
        <Route path='/employees' render={() => <Employees/>}/>
    </div>
  );
}

export default App;
