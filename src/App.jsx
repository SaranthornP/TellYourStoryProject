// CSS
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { Component } from 'react';
export default class App extends Component {

  state = {
    num: 0,
    login: 0

  }

  handleLogin = (childData) => {
    this.setState({ login: childData })
  }

  Loadpage() {
    onAuthStateChanged(auth, (user) => {
      //login
      if (user) {
        this.setState({ login: 1 })
      } else {
        this.setState({ login: 0 })
      }

    })
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App" onLoad={this.Loadpage.bind(this)}>
          {/* Navigation Bar*/}
          <Navigation login={this.state.login} />
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
      </BrowserRouter>
    );
  }
}

