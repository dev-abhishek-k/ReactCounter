import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [count,setCount]=useState(0)
  function Increment(){
  
      setCount((e)=>e+1)
    
  }
  return (
    <div className="App">
      <p>count:{count}</p>
     <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default App;
