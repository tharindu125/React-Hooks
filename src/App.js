import './App.css';
import Parent from './Components/UseContext/Parent';
import UseEffect from './Components/UseEffect';
import UseState from './Components/UseState';

function App() {
  return (
    <div className="App">
      <UseState/>
      <UseEffect/>
      
      <Parent/>
    </div>
  );
}

export default App;
