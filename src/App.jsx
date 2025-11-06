import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css';

function App({ element }) {
  return (
    <>
      <Navbar />
      {element}
      <Footer />
     
    </>
  );
}

export default App;
