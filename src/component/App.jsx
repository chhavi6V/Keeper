import React from 'react';
import reactDOM from 'react-dom';
import Header from './Header'
import Footer from './Footer';
import Note from './Note';

function App(){
  return(
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  )
}

export default App;