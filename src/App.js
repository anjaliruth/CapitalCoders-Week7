/*

import logo from './logo.svg';
// import './App.css';
import Forum from './Forum/index.js';


import Grid from './Grid/index.js';
import weekGrid from './Lib/data';


function App() {
  return (
    <div className="App">
      <Grid data = {weekGrid} />
      <Forum />
*/

import {Link, Routes, Route} from "react-router-dom";
import Grid from "./Grid/index.js";

function App() {
  return (
    <div>
    <Routes>
      <Route path = "/" element = {<Grid />}/>
      <Route path = "/forums/:id" element = {<Forum />}/>

      <Route/>
    </Routes>

    </div>

    // <div className="App">
    //   <Forum />
    // </div>
  );
}

export default App;
