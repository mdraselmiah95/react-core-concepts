import "./App.css";
import logo from "./logo.svg";

const newNumber = 3488;
const singer = {
  name: "Asif",
  job: "singer",
};
const singerTwo = {
  name: "Singh",
  job: "singer",
};

// console.log(newNumber, singer);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>This is the start of React</h3>
        <p>Happy journey with React.</p>
        <div className="container">
          <h3>EveryThing will be grate again.</h3>
          <p>My number is : {newNumber}</p>
          <p>Singer: {singer.name + " " + singer.job}</p>
          <p>Real singer: {singerTwo.name}</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
