import './App.css';
import SpinningReact from './SpinningReact';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LightBox from './components/Lightbox';

function App() {
  return (<>
    <LightBox />
    <Navbar />
    <Home />
  </>
  );
}

export default App;
