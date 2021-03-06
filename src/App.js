import React from 'react';
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";


export default function App({ children }) {

  return (
    <div className="App">
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
