import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [counter,setCount]=useState(0)
  function Inc(){
  
      setCount((e)=>e+1)
    
  }
  return (
    <div className="App">
      <p>count:{counter}</p>
     <button onClick={Inc}>Increment</button>
    </div>
  );
}

export default App;
