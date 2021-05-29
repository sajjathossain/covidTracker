import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, Contact } from './pages'
import { Navbar, Footer } from './templates'
import { DataProvider } from './contexts/DataContext'
import './App.css'


const App = () => {  return (
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