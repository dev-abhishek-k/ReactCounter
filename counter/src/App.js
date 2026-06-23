import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [count,setCount]=useState(0)
  function Inc(){
  
      setCount((e)=>e+1)
    
  }
  return (
    <div className="App">
      <p>count:{count}</p>
     <button onClick={Inc}>Increment</button>
    </div>
  );
}

export default App;
