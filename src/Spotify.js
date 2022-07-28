export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://reactjs-spotify-clone.netlify.app/";

const clientid = "c63482e8f1524b719acae4624856a2ba";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const loginUrl = `${authEndpoint}?client_id=${clientid}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
    return window.location.hash
        .substr(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};