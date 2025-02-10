// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
          <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/header" element={<Header/>} />
        {/* <Route path="/profile" element={<Profile/>} /> */}
        {/* <Route path="/nav" element={<Navbar/>} />  */}

       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
