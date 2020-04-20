import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import Board from './views/Boad/Board';
import OpenModal from  './components/OpenModal/OpenModal';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/board" component={Board} />
          <Route path='/modal' component={OpenModal} />
        </Switch>
      </Router>
    );
  }
}

export default App;
