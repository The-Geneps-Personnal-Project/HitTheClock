"use client";

import ConnectSpotifyButton from "@/components/ui/Buttons/ConnectSpotifyButton";
import { connectToSpotify } from "@/lib/spotify/auth";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Welcome</h1>
      <ConnectSpotifyButton onClick={connectToSpotify} />
    </main>
  );
}
