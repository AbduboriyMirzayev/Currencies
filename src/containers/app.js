import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Main from './Main'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
