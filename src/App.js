// import logo from './logo.svg';
// import './App.css';
import Forum from './Forum/index.js';
import {Routes, Route} from "react-router-dom";
import Grid from "./Grid/index.js";
import weekGrid from "./lib/data.js";
import BlogPost from './Forum/blogpost.js';

function App() {
  return (
    <div>
    <Routes>
      <Route path = "/" element = {<Grid data = {weekGrid} />}/>
      <Route path = "/forums/:id" element = {<Forum data = {weekGrid}/>}/>
      <Route path="/forum/:topicIndex" component={Forum} />
      <Route/>
    </Routes>
    </div>
  );
}

export default App;
