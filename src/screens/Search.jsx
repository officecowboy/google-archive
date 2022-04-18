import '../App.css';
import Header from '../components/header/Header';
import Articles from '../components/articles/Articles';
import Memories from '../components/memories/Memories';

function Search() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Memories />
        <Articles />
      </div>
    </div>
  );
}

export default Search;
