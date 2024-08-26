import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

function App() {
  return (
    <div className="App">
      {/* This header now just says "Now" */}
      <h1>Now</h1>
      
      {/* Including the ExampleComponent */}
      <ExampleComponent />
      
      {/* Including the TestComponent */}
      <TestComponent />
    </div>
  );
}

export default App;
