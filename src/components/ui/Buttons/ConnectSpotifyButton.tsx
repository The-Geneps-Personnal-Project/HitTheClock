type ConnectSpotifyButtonProps = {
  onClick: () => void;
};

export default function ConnectSpotifyButton({
  onClick,
}: ConnectSpotifyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
    >
      Connect to Spotify
    </button>
  );
}
