import Home from './components/Home';
import Footer from './components/Footer';
import MyStory from './components/MyStory';
import Projects from './components/Projects';
import Music from './components/Music';
import Art from './components/Art';
import NavBar from './components/NavBar';
import PagesContainer from './components/PagesContainer';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import {  } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation()
  return (
      <div className="App">
          {location.pathname == '/' ? null : <NavBar/>}
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route element={PagesContainer}/>
            <Route path="/story" element={<MyStory />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/art" element={<Art />}/>
        </Routes>
        <Footer id="footer"/>
      </div>
  );
}

export default App;
