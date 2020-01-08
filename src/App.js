import React from "react";
import PhotoList from "./components/PhotoList";
import logo from "./asserts/logo.png";
import "./App.css";



function App() {
  return (
    <div className="App">
      <div className = "logo_container">
        <img className="logo" src={logo} alt="Nasa offical logo"/>
        <h1>NASA Photo of the Day!</h1>
        <PhotoList />
      </div>
    </div>
  );
}

export default App;
