import './App.css';
import Header from './Components/header';
import Main from './Components/main';

export default function App() {
  return (
    <div className="Header">
        <Header />
        <div className='main'>
          <Main />
        </div>
    </div>
    
  );
}
