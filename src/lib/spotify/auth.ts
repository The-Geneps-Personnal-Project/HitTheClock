export function connectToSpotify() {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
  const scopes = encodeURIComponent(
    "user-read-private user-read-email playlist-read-private playlist-read-collaborative user-library-read user-read-playback-state user-read-currently-playing user-modify-playback-state"
  );

  if (!clientId || !redirectUri) {
    console.error("Spotify client ID or redirect URI is not set.");
    return;
  }

  const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}`;

  window.location.href = authUrl;
}
