// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile';
import CourseDeProps from './Components/CourseDeProps';
import CourseDetails from './Pages/CourseDetails';


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
        <Route path="/course-details-props" element={<CourseDeProps/>} />
        <Route path="/course-details" element={<CourseDetails/>} />

       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
