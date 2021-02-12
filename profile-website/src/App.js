import './App.scss';
import Nav from './components/Nav'
import IntroText from './components/IntroText'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <div className="header-container">
<Nav />
<IntroText />
      </div>
      <div className='middle-container'>
      <About />
      </div>
    </div>
  );
}

export default App;
