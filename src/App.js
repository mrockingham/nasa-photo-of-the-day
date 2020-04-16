import React from "react";
import PhotoList from 'C:/Users/User/desktop/lambdaflex/nasa-photo-of-the-day/src/PhotoList.js'
import "./App.css";
import logo from 'C:/Users/User/desktop/lambdaflex/nasa-photo-of-the-day/src/Icons/nasa logo.jpg'
function App() {
  return (
    <div className="App">
      <div className='Logo-Container'>
        <img className='logo' src={logo} alt='Nasa logo' />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
     </div> 
    </div>
  );
}

export default App;
