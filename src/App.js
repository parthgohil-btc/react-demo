import React from 'react';
import login from'./components/Auth/Login';
import signup from'./components/Auth/Signup';
import Dashboard from'./components/Auth/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className={[App, 'row']}>
      <div className={['row']}>
        <BrowserRouter>
          <Route path="/" exact component={login} />
          <Route path="/login" exact component={login} />
          <Route path="/signup" exact component={signup} />
          <Route path="/dashboard" exact component={Dashboard} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
