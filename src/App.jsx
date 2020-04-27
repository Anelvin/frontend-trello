import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import OpenModal from  './components/OpenModal/OpenModal';
import Dashboard from './views/Dashboard/Dashboard';
import BoardDetails from './views/BoardDetails/BoardDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path='/modal' component={OpenModal} />
          <Route path='/:user/detailsboard/:board' component={BoardDetails} />
          <Route path='/dashboard/:user' exact component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
