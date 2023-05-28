import './App.css';
import Header from './Components/header';
import Main from './Components/main';
import About from './Components/about';
import Portfolio from './Components/portfolio';
import Resume from './Components/resume';
import Contact from './Components/contact';
import Footer from './Components/footer';

export default function App() {
  return (
    <div className="header">
      <Header />
      <div className='main'>
        <Main />
        <div className='about'>
          <About />
          <div className='portfolio'>
            <Portfolio />
            <div className='resume'>
              <Resume />
            </div>
            <div className='contact'>
              <Contact />
            </div>
            <div className='footer'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
