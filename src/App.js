
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar';
import Section from './Components/Sections/section';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Section/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
