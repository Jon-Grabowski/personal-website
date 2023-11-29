import Home from './components/Home';
import MyStory from './components/MyStory';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/story" element={<MyStory />}/>
        </Routes>
        <Footer id="footer"/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
