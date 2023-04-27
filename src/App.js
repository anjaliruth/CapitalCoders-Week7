 import logo from './logo.svg';
 import './App.css';
import Forum from './Forum/index.js';
import {Routes, Route} from "react-router-dom";
import Grid from "./Grid/index.js";
import weekGrid from "./lib/data.js";
import Login from "./Login/index.js";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/grid"
          element={<Grid data={weekGrid} location={location} />}
        />
        <Route path="/forums/:id" element={<Forum data={weekGrid} />} />
      </Routes>
    </div>
  );
}


export default App;
