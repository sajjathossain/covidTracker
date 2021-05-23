import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, Contact } from './pages'
import { Navbar, Footer } from './templates'
import { DataProvider } from './Contexts/DataContext'
import './App.css'


const App = () => {  return (
    <DataProvider>
      <section className="appBody">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </section>
    </DataProvider>
  );
};

export default App;