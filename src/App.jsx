import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todo from "./Todo";

function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todos">Todos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<Todo />} />
      </Routes>

    </div>
  );
}

export default App;