import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      
        <Header />
        <Categories />
        <Carousel />
    </div>
  );
}

export default App;
