import { useState } from "react";
import "./App.css";
import { Left } from "./Component/Left";
import { Right } from "./Component/Right";

function App() {
  return (
    <div className="container mx-auto px-36 py-6">
      <div className="App  text-2xl border rounded-2xl h-[95vh] flex items-center">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
