import Button from "@atlaskit/button";
import React from "react";

function App() {
  console.log("app");

  function alertMe() {
    alert(`Hello from ${window.location.hostname}`);
    console.log("Alert");
  }

  return (
    <div className="app">
      <h4 className="title">React - AtlasKit</h4>

      <div className="app-buttons">
        <Button appearance="primary" onClick={alertMe}>
          Click me
        </Button>
        <Button>Click me</Button>
        <Button appearance="danger">Click me</Button>
        <Button appearance="warning">Click me</Button>
      </div>
    </div>
  );
}

export default App;
