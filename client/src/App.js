import './App.css';
import Nav from "./Components/NavBar";
import SearchHeader from '../src/Components/SearchHeader';

function App() {
  return (
    <div >
      <header className="App-header">
      <Nav/>                    
      </header>
      <SearchHeader/>
      <div className="belowNav">
                    </div>
    </div>
  );
}

export default App;
