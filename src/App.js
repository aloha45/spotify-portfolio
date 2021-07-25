import './App.css';
import axios from 'axios'


function App() {
  const testFunction = () => {
    axios
			.get("/users/")
			.then((response) => console.log("server response", response.data));
  }

  return (
    <div className="App">
      <h1>Cory rules</h1>
      <div>
        <button onClick={testFunction}>Test</button>
      </div>
    </div>
  );
}

export default App;
