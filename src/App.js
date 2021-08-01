import React, { useState, useEffect } from 'react';
import './App.css';
import { MyComponent } from './api/api';


function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
 
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App;
