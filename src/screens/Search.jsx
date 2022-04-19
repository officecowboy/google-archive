import '../App.css';
import Articles from '../components/articles/Articles';
import Memories from '../components/memories/Memories';

function Search({ date, setDate, dateSort, setDateSort, dateArray, setDateArray }) {
  return (
    <div className="App">
      <div className="main-content">
        <Memories
          date={date}
          setDate={setDate}
          dateSort={dateSort}
          setDateSort={setDateSort}
          dateArray={dateArray}
          setDateArray={setDateArray}
        />
        <Articles />
      </div>
    </div>
  );
}

export default Search;

