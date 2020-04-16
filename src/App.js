import React from "react";
import PhotoList from 'C:/Users/User/desktop/lambdaflex/nasa-photo-of-the-day/src/PhotoList.js'
import "./App.css";
import logo from 'C:/Users/User/desktop/lambdaflex/nasa-photo-of-the-day/src/Icons/nasa logo.jpg'
function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' src={logo} alt='Nasa logo' />
      <h1>Michael's Nasa Photos </h1>
      <PhotoList />
     </div> 
    </div>
  );
}

export default App;
