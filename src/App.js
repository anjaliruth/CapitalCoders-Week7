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
    </div>
  );
}

export default App;
