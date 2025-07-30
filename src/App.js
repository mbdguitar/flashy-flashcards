import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ModalOverlay from './components/ModalOverlay';

function App({ state }) {
  return (
    <>
      <Navbar />
      <Home />
      <ModalOverlay />
    </>
  );
}

export default App;
