import './App.css'

import { About, Contact, Home } from './pages'
import { Footer, Navbar } from './templates'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { DataProvider } from './contexts/DataContext'

const App = () => {  
  return (
    <DataProvider>
      <section className="appBody">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/covidTracker' component={Home} />
            <Route exact path='/covidTracker/about' component={About} />
            <Route exact path='/covidTracker/contact' component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </section>
    </DataProvider>
  );
};

export default App;