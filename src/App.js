import './App.css';
import Header from './components/header/header';
import Results from './components/results';
import Articles from './components/articles';
import Memories from './components/memories';

function App() {
  return (
    <div className="App">
      <Header />
      <Results />
      <Memories />
      <Articles />
    </div>
  );
}

export default App;
