import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
// Import other components

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;