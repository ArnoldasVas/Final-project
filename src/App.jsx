import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { mockData } from './mockData';

import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/MainClass';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  // const [data, setData] = useState(mockData);
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
