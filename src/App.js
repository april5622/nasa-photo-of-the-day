import React from "react";
import PhotoList from "./components/PhotoList";
import logo from "./asserts/logo.png";
import { Spinner } from 'reactstrap';
import styled from 'styled-components'
import "./App.css";

const Button = styled.button`
  background: #144CCD;
  border-radius: 3px;
  border: 2px solid red;
  color: white;
  margin: 1rem;
  padding: 0.25rem 1rem;
  `;

 const TitleH1 = styled.h1`
  color: red;
 `; 

 const AppDiv = styled.div`
  background: black;
 `;


function App() {
  return (
    <AppDiv className="App">
      <div className = "logo_container">
        <Spinner type="grow" color="dark" />
        <img className="logo" src={logo} alt="Nasa offical logo"/>
        <Spinner type="grow" color="dark" />
        <TitleH1>NASA Photo of the Day!</TitleH1>
        <Button>Yesterday's Photo</Button>
        <PhotoList />
      </div>
    </AppDiv>
  );
}

export default App;
