import './App.css';
import Header from './Components/header';
import Main from './Components/main';
import About from './Components/about';
import Portfolio from './Components/portfolio';


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
            {/* <div className='contact'>
          <Contact />
        </div>  */}
          </div>
        </div>
      </div>
    </div>

  );
}
