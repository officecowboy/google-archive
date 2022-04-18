import '../App.css';
import Header from '../components/header/Header';
import Articles from '../components/articles/Articles';
import Memories from '../components/memories/Memories';

function Search({ date, setDate }) {
  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      <div className="main-content">
        <Memories date={date} />
        <Articles />
      </div>
    </div>
  );
}

export default Search;

