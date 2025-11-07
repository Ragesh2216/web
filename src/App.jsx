import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css';
const basename = "/news-website"; 
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
