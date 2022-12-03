import React, {useState} from "react";
import './index.css';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="plane">
      
    <div className="body">
      
        <h1>Counter</h1>
        <h2 className="head">{count}</h2>
        <button className="btn" onClick={()=> setCount(count+1)}>Increment</button>
        <button className="btn" onClick={()=> setCount(count-1)}>Decrement</button>
      
    </div>
    </div>
  );
}

export default App;
