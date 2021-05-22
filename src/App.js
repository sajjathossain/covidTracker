import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * * Pages Imports Go Here
*/
import { Home, About, Contact } from './pages'

/**
 * * Templates Imports Go Here
*/
import { Navbar, Footer } from './templates'

/**
 * * Component Imports Go Here
*/

import './App.css'


const App = () => {
  return (
    <div className="appBody">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;