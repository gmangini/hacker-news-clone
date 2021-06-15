import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Author from './components/Author';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Author' component={Author}></Route>
          <Route render={() => <h1>404</h1>} />
          </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

