import './App.css';
import Header from 'src/components/header/Header';
import Articles from 'src/components/articles/Articles';
import Memories from 'src/components/memories/Memories';

function App() {
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

export default App;
