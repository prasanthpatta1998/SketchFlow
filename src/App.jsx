import React from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

const App = () => {
  return (
    <div>
      <Tldraw className="tldraw" debugMode={true}/>
    </div>
  );
};

export default App;
