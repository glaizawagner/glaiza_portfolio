import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/Landing/Landing';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Loading from './Components/Loading/Loading';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import resumeData from './resumeData'
import './App.css';

function App() {

  const [ loading, setLoading ] = useState(true);
  
  useEffect( () => {
    const timer = setTimeout( () => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if(loading) {
    return <Loading />
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <main className="container">
            <Switch>
              <Route exact path={'/'} 
                render={ () => <LandingPage resumeData = {resumeData} />}
              />
              <Route path={'/about'} 
                render={ () => <About resumeData = {resumeData}/>}
              />
              <Route path={'/projects'} 
                render={ () => <Projects resumeData = {resumeData} />}
              />
              <Route path={'/contact'} component={Contact} />
            </Switch>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
      
    );
  }
}

export default App;
