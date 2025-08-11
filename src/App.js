import logo from './logo.svg';
import './App.css';
import Pane from './components/week-pane';

function App() {
  return (
    <div className="App">
      <Pane style={{ minHeight: '100%'}}/>
    </div>
  );
}

export default App;
