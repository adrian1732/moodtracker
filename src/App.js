import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import NavBar from './pages/navbar';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/notFound';


function App() {
  return (
    <Router>
    <div className="App">
      
      <NavBar />
      <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/articles-list" component={ArticlesListPage}/>
      <Route path="/article/:name" component={ArticlePage}/>
      <Route component={NotFoundPage}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
