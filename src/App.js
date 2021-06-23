import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MaladieFabry from './components/maladieFabry/MaladieFabry';
import Association from './components/association/Association';
import Actualite from './components/actualite/Actualite';
import Partenaire from './components/partenaire/Partenaire';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <MaladieFabry />
        <Association />
        <Actualite />
        <Partenaire />
        <Contact />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
