import logo from './logo.svg';
import './App.css';
import { count } from './number.js';
import { length } from './number.js';


const a = 'Thats for show variable'
const b = 42
const c = 42 / 2
const flag = true

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {{
          color: "green"
        }}>
          Hello World!
        </p>
        <p>
          { a + " "}          
          { b + " "}
          { c + " "}
          { flag && 'Flag is true' + ' '}
          { flag ? "and thats true!" : "Oh, no... False"}
          { undefined }
          { null }
          { false }
          { true }
        </p>
        <p>
          { 'count' + '*' + 'length' + '=' + count*length }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
