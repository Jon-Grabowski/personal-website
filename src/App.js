import Home from './components/Home';
import Footer from './components/Footer';
import MyStory from './components/MyStory';
import Projects from './components/Projects';
import Music from './components/Music';
import Art from './components/Art';
import NavBar from './components/NavBar';
import PagesContainer from './components/PagesContainer';

import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useEffect } from 'react';
import './App.css';

import TestScroll from './components/TestScroll';
function App() {
  const location = useLocation()

  // useEffect(() => {
    
  //   // Registering the 'begin' event and logging it to the console when triggered.
  //   Events.scrollEvent.register('begin', (to, element) => {
  //     console.log('begin', to, element);
  //   });

  //   // Registering the 'end' event and logging it to the console when triggered.
  //   Events.scrollEvent.register('end', (to, element) => {
  //     console.log('end', to, element);
  //   });

  //   // Updating scrollSpy when the component mounts.
  //   scrollSpy.update();

  //   // Returning a cleanup function to remove the registered events when the component unmounts.
  //   return () => {
  //     Events.scrollEvent.remove('begin');
  //     Events.scrollEvent.remove('end');
  //   };
  // }, []);

    return (
      <div className="App">
        <Home />
        <MyStory />
        <Projects />
        <Music />
        <Art />
        <Footer id="footer"/>
      </div>
    )
  // return (
  //     <div className="App">
  //         {location.pathname == '/' ? null : <NavBar/>}
  //         <Routes>
  //           <Route exact path="/" element={<Home />}/>
  //           <Route element={PagesContainer}/>
  //           <Route path="/story" element={<MyStory />}/>
  //           <Route path="/projects" element={<Projects />}/>
  //           <Route path="/music" element={<Music />}/>
  //           <Route path="/art" element={<Art />}/>
  //           <Route path="/scroll" element={<TestScroll />}/>
  //       </Routes>
  //       <Footer id="footer"/>
  //     </div>
  // );
}

export default App;
