import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="screenshot-container">
        <div className="screenshots">
          <div className="screenshot screenshot-1"></div>
          <div className="screenshot screenshot-2"></div>
          <div className="screenshot screenshot-3"></div>
        </div>
      </div>
      <div className="frame-container">
        <div className="frame">
          <img src="iphone-frame.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
