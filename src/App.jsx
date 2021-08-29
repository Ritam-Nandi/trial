import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro"
import Portfolio from "./component/portfolio/Portfolio"
import Works from "./component/works/Works"
import Testimonials from "./component/testimonials/Testimonials"
import Contact from "./component/contact/Contact"
import "./App.scss"
import { useState } from "react";
import Menu from "./component/Menu/Menu";
import Social from "./component/Social/Social";

function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  return (
    <div className="App">
        <Topbar  menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Social />
        <div className="section">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />

        </div>
    </div>
  );
}

export default App;

