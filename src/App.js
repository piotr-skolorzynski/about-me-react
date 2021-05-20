import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Header}/>
          <Route exact path='/about' component={About} />
          <Route path='/experience' component={Experience} />
          <Route path='/skills' component={Skills} />
          <Route path='/Hobbies' component={Hobbies} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;