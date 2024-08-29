import React from 'react'
import NavBar from './Components/Nav_bar/NavBar'
import Home from './Components/Home/Home'
import Program from './Components/Program/Program'
import UNIVERSITY from './Components/AboutUnivircity/UNIVERSITY'
import Campus from './Components/Campus/Campus'
import Opinion from './Components/Opinion/Opinion'
import Footer from './Components/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  return (
    <div>
    <NavBar />
    <section id="home">
      <Home />
    </section>
    <section id="program">
      <Program />
    </section>
    <section id="about">
      <UNIVERSITY />
    </section>
    <section id="campus">
      <Campus />
    </section>
    <section id="testimonials">
      <Opinion />
    </section>
    <section id="contact">
      <Footer />
    </section>
  </div>
  )
}

export default App