import Button from "@atlaskit/button";
import React from "react";

function App() {
  console.log("app");

  return (
    <div className="app">
      <h1 className="title">React - AtlasKit</h1>

      <div className="app-buttons">
        <Button>Click me</Button>
        <Button appearance="primary">Click me</Button>
        <Button appearance="danger">Click me</Button>
        <Button appearance="warning">Click me</Button>
      </div>
    </div>
  );
}

export default App;
