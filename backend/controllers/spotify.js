const axios = require("axios");

module.exports = {
	getToken,
};

function getToken(req, res) {
		axios("https://accounts.spotify.com/api/token", {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization:
					"Basic " + btoa(spotify.ClientID + ":" + spotify.ClientSecret),
			},
			data: "grant_type=client_credentials",
			method: "POST",
		})
			.then((tokenResponse) => {
				console.log("server", tokenResponse);
				res.send(tokenResponse);
			})
			.catch((err) => {
				console.log(err);
				res.send(err);
			});
}
