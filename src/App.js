import './App.css';
import Home from './screens/Home';
import Search from './screens/Search';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [date, setDate] = useState("")

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home date={date} setDate={setDate} />} />
        <Route path="/search" element={<Search date={date} setDate={setDate} />} />
      </Routes>
    </div>
  );
}

export default App;
