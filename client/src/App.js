import React, { Component } from 'react';
// import DemoCarousel from './pages/carouselDontUse';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route} from 'react-router-dom';
import "./index.css";
import './carousel.css';
import ContactForm from './pages/ContactForm';
import Footer from './Components/Footer';
import About from './pages/About';
import Covid from './Components/Covid';
import Attractions from './pages/attractions'
import CarouselNew from './pages/carouselnew';
export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar />
    
      <Route exact path='/about' component= { About } />
      <Route exact path='/attractions' component= { Attractions } />
      <Route exact path='/Covid' component= { Covid } />
      <Route exact path='/' component= { CarouselNew } />
      <Route exact path='/contact' component= { ContactForm }/>
      <Footer/>
      </BrowserRouter>
      </div>
    )
  }
}