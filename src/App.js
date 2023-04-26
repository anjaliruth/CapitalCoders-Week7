import logo from './logo.svg';
import './App.css';
import Forum from './Forum/index.js';
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
