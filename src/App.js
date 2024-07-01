import React from 'react';
import './App.css';
import NavBar from './component/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './component/Banner/Banner';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
    </div>
  );
}

export default App;
