import './App.css';
import Home from './screens/Home';
import Search from './screens/Search';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from './services/articles';

function App() {

  const [date, setDate] = useState("");
  const [dateArray, setDateArray] = useState([]);
  const [dateSort, setDateSort] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getArticles()
      setArticles(response)
      console.log(response)
    }

    fetchArticles()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home
            date={date}
            setDate={setDate}
            dateSort={dateSort}
            setDateSort={setDateSort}
            dateArray={dateArray}
            setDateArray={setDateArray}
          />
        } />
        <Route path="/search" element={
          <Search
            articles={articles}
            date={date}
            setDate={setDate}
            dateSort={dateSort}
            setDateSort={setDateSort}
            dateArray={dateArray}
            setDateArray={setDateArray}
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
