import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-sky-900 text-lg">
      <Link to={"/"}>Kanban</Link>
    </div>
  );
}

export default App;
