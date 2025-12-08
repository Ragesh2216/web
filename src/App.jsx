import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Scrolltop from "./components/Scrolltop"; // Fixed typo in component name
import './App.css';

function App({ element }) {
  const location = useLocation();

  // Scroll to top on route change with hash router
  useEffect(() => {
    // For hash router, we need to handle scroll differently
    if (location.hash) {
      // If there's a hash in the URL (e.g., #section), let the browser handle it
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top for regular route changes
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Scrolltop />
      <Navbar />
      <main>
        {element}
      </main>
      <Footer />
    </>
  );
}

export default App;