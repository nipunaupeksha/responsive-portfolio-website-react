import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";


const App = ()=> {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience/>
      <Services/>
      <Testimonials/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
