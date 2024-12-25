import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./pages/CharacterList";
import { Route, Routes } from "react-router-dom"; // Ensure you're importing from 'react-router-dom'
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
