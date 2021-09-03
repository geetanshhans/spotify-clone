import { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  var id;
  //useEffect basically runs the code on a given condition
  useEffect(() => {
    //...code
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log(user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      //The above line gets the user and it is a spotify.getMe returns a promise
      spotify.getUserPlaylists().then((playlists) => {
        // console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getMyRecentlyPlayedTracks().then((tracks) => {
        console.log(tracks);
      });
    }
    // console.log(_token);
  }, [dispatch]);
  //If the array is empty, then the useEffect will run only once when the app component loads whereas if there is some variable inside the array, then it will run the code whenever the value of that variable will change
  //You can have multiple useEffects

  console.log(user);
  // console.log(token);
  // console.log(playlists);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
