// CSS
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min"

// Navigation bar
import Navigation from './Navbar'

// Web page 
import Home from './components/home'
import Consult from './components/consult'
import TalkingArea from './components/talkingArea'
import Engagement from './components/engagement'
import Contact from './components/contact'
import Login from './components/login'
import Register from './components/register'

// Set up Route for make navigation, Set up helmet
import { Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'



function App() {
  return (
    <div className="App">
      {/* Navigation Bar*/}
      <Navigation />
      {/* Set path */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Consult' element={<Consult />} />
        <Route path='/Talkingarea' element={<TalkingArea />} />
        <Route path='/Engagement' element={<Engagement />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Signin' element={<Login />} />
        <Route path='/Signup' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
