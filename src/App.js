import "./App.css";
import Todo from "./Todo";
import { useState } from "react";
function App() {
  const [pageName, setPageName] = useState("All");
  const handleRoute = (e) => {
    setPageName(e.target.outerText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>#todo</h1>
        <nav>
          <ul>
            <li onClick={handleRoute}>All</li>
            <li onClick={handleRoute}>Active</li>
            <li onClick={handleRoute}>Completed</li>
          </ul>
        </nav>
        <hr />
      </header>
      <Todo pageName={pageName}></Todo>
    </div>
  );
}

export default App;
