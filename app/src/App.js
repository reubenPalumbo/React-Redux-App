import React, { useState, useEffect } from "react";
import Main from "./Components/main";
import MainFrom from "./Components/mainForm";

import "./App.css";

function App() {
  return (
    <div className="App-header">
      <MainFrom />
      <Main />
    </div>
  );
}

export default App;
