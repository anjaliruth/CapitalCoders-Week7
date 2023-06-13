
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from '../Grid';
import ButtonInfo from '../ButtonInfo';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Grid} />
        <Route path="/button1" component={ButtonInfo} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
