import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LayoutWrapper from './components/LayoutWrapper'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Space from './components/Space'
import { updateCoords } from './store/pageScroll';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LogoBar from './components/LogoBar';
import Skills from './components/Skills';

function App() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     dispatch(updateCoords(window.pageXOffset, window.pageYOffset))
  //   })
  // }, [dispatch])

  return (
    <div className="App relative">
        <Navbar />
        <LogoBar />
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Space />
    </div>
  );
}

export default App;
