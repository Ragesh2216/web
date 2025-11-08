import React, { useEffect } from "react";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 — Page Not Found";
  }, []);

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Oops — the page you are looking for does not exist.
        </p>
        <a href="/" className="notfound-button">
          Go to Home
        </a>
      </div>
    </div>
  );
}
