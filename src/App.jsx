// CSS
import './App.css';

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
  test() {
    var count = this.state.num
    count += 1
    this.setState({ num: count })
  }

  loaad() {
    onAuthStateChanged(auth, (user) => {
      //login
      console.log(user)
      if (user) {
        this.setState({ login: 1 })
      } else {
        this.setState({ login: 0 })
      }
    })
  }
  render() {

    return (
      <div className="App" onLoad={this.loaad}>
        {/* Navigation Bar*/}
        <Navigation num={this.state.num} login={this.state.login} />
        {/* Set path */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Consult' element={<Consult />} />
          <Route path='/Talkingarea' element={<TalkingArea />} />
          <Route path='/Engagement' element={<Engagement />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Signin' element={<Login parentCallbackLogin={this.handleLogin} />} />
          <Route path='/Signup' element={<Register />} />
        </Routes>
        <button className='underline font-bold' onClick={this.test.bind(this)}>dsadas {this.state.num}</button>
      </div>
    );
  }
}

