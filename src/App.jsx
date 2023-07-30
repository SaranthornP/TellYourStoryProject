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

// Set up Route for make navigation, Set up helmet
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Consult' element={<Consult />} />
        <Route path='/Talking_Area' element={<TalkingArea />} />
        <Route path='/Engagement' element={<Engagement />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
