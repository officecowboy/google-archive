import '../App.css';
import Articles from '../components/articles/Articles';
import Memories from '../components/memories/Memories';

function Search({ articles, doodles, date, setDate, dateEntry, setDateEntry, dateSort, setDateSort, dateArray, setDateArray }) {
  return (
    <div className="App">
      <div className="main-content">
        <Memories
          doodles={doodles}
          date={date}
          setDate={setDate}
          dateSort={dateSort}
          setDateSort={setDateSort}
          dateArray={dateArray}
          setDateArray={setDateArray}
          dateEntry={dateEntry}
          setDateEntry={setDateEntry}
        />
        <Articles
          articles={articles}
          date={date}
          setDate={setDate}
          dateEntry={dateEntry}
          setDateEntry={setDateEntry}
        />
      </div>
    </div>
  );
}

export default Search;

