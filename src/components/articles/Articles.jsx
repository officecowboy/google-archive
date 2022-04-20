import React from 'react';
import Results from './Results';
import Article from './Article';
import SearchBar from '../SearchBar';
import './Articles.css';

<<<<<<< Updated upstream
export default function Articles({ dateEntry, setDate }) {
=======
export default function Articles({ date, dateEntry, setDate }) {

  const [articles, setArticles] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getArticles()
      setArticles(response)
      console.log(response)
    }

    fetchArticles()
  }, [toggle])


>>>>>>> Stashed changes
  return (
    <div className="right-column">
      <div className="searchbar-container">
        <SearchBar
          date={dateEntry}
          setDate={setDate} />
      </div>
      <div className="articles">
        <Results />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  )
}