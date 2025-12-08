import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Scrooltop from "./components/Scrooltop"; // Note the correct filename
import './App.css';

function App({ element }) {
  return (
    <>
      <Scrooltop/> {/* Use the correct component name */}
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

export default App;