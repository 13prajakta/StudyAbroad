import logo from './logo.svg';
import './App.css';
import Navbar from './Parts/Navbar.js'
import Footer from './Parts/Footer.js'
import Home from './Parts/Home.js'
import About from './Parts/About.js'
import Contact from './Parts/Contact.js'
import Signin from './Parts/Signin.js'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
