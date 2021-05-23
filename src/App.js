import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**
 * * Pages Imports Go Here
*/
import { Home, About, Contact } from './pages'

/**
 * * Templates Imports Go Here
*/
import { Navbar, Footer } from './templates'

import { fetchData } from './Api';
import './App.css'


const App = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const collectData = async () => { 
      setResults(await fetchData())
    }

    collectData()
  }, [])

  console.log(results)

  return (
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
  );
};

export default App;