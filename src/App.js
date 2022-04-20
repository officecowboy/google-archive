import './App.css';
import Home from './screens/Home';
import Search from './screens/Search';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from './services/articles';
import { getDoodles } from './services/doodles';
import Logo from './components/Logo';

function App() {

  const [date, setDate] = useState("");
  const [dateArray, setDateArray] = useState([]);
  const [dateSort, setDateSort] = useState("");
  const [articles, setArticles] = useState([]);
  const [doodles, setDoodles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getArticles()
      setArticles(response)
      console.log(response)
    }

    fetchArticles()
  }, [])

  useEffect(() => {
    const fetchDoodles = async () => {
      const response = await getDoodles()
      setDoodles(response)
      console.log(response)
    }

    fetchDoodles()
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
            doodles={doodles}
          />
        } />
        <Route path="/search" element={
          <Search
            articles={articles}
            doodles={doodles}
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
