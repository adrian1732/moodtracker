import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import './App.css';
import SignupForm from './pages/addUser';
import LoginForm from './pages/login';
import {Link} from 'react-router-dom';
import Home from './pages/Home'
class App extends Component {
  render() {
    return (
      <Router>
      <NavBar/> 
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={AboutPage} />
          <Route path="/addUser" component={SignupForm} />
          <Route path="/Login" component={LoginForm} />
          <Route component={NotFoundPage} />
      </Switch>
      </Router>
      /*
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route path="/addUser" component={SignupForm} />
              <Route path="/Login" component={LoginForm} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
      */
    );
  }
}

export default App;
