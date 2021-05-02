import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <Router>
        <Navigation></Navigation>
          <Switch>
              <Route path="/about">
                 <AboutMe></AboutMe>
              </Route>
              <Route path="/projects">
                 <Projects></Projects>
              </Route>
              <Route path="/blog">
                 <Blog></Blog>
              </Route>
              <Route path="/resume">
                 <Resume></Resume>
              </Route>
              <Route path="/home">
                 <Home></Home>
              </Route>
              <Route path="/contact">
                 <Contact></Contact>
              </Route>
              <Route path="/skill">
                 <Skill></Skill>
              </Route>
              <Route exact path="/">
                 <Home></Home>
              </Route>
              <Route  path="*">
                 <NotFound></NotFound>
              </Route>
        </Switch>
    </Router>
  );
}

export default App;
