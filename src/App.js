import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Landingpage from "./landingpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Landingpage
        
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
