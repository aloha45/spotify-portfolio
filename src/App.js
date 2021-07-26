import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Credentials } from './Credentials/Credentials'


function App() {
  const [token, setToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("")

  const spotify = Credentials()

  useEffect = () => {
    // hit backend for client id and secret and set here using hooks
  }

  const getTracksClient = () => {
		axios("https://accounts.spotify.com/api/token", {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": "Basic " + btoa(spotify.ClientID + ":" + spotify.ClientSecret)
			},
		  data: 'grant_type=client_credentials',
		  method: 'POST'
		})
		.then(tokenResponse => {
		  console.log(tokenResponse)
		  setToken(tokenResponse.data.access_token);
		})
	};

  const getTracksServer = () => {
    axios.get("/spotify").then((token) => console.log('client', token))
  }

  return (
    <div className="App">
      <h1>Cory rules</h1>
      <div>
        <button onClick={getTracksClient}>Client</button>
        <button onClick={getTracksServer}>Server</button>
      </div>
    </div>
  );
}

export default App;
