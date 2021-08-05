import SearchBar from "../Components/SearchBar/SearchBar";

let accessToken;
const clientId = '55f1d60c09704a8bb7a5d3128ac865fb';
const redirect_uri = 'http://localhost:3000/';


const Spotify = {

    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        const hasAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const hasExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (hasAccessToken && hasExpiresIn){
            accessToken = hasAccessToken[1];
            const expiresIn = Number(hasExpiresIn[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${redirect_uri}`;
            window.location = accessUrl;
            }
        },
        search(searchTerm){
            const accessToken = Spotify.getAccessToken();
            return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
                headers: {Authorization: `Bearer ${accessToken}`}
              })
              .then(response => response.json())
              .then(jsonResponse => {
                  if(!jsonResponse.tracks) {
                      return [];
                  } return jsonResponse.tracks.items.map(track => ({
                      id: track.id,
                      name: track.name,
                      artist:track.artists[0].name,
                      album: track.album.name,
                      uri: track.uri
                  }));
              });
        }
    }
export default Spotify;