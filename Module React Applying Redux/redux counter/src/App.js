import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.count); // Access the count from Redux store
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", backgroundColor: "#cce6ff", padding: "50px", height: "500px", fontSize: "50px" }}>
      <h1 style={{ fontSize: "100px" }}>Hello redux</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())} style={{ margin: "5px", height: "50px", width: "150px", fontSize: "20px" }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: "5px", height: "50px", width: "150px", fontSize: "20px" }}>
        Decrement
      </button>
      
    </div>
    
  );
}

export default App;
