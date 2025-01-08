import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ButtonComponent from "../../components/Buttons/button";
import styles from "./HomePage.styles";
import SpotifyIconSVG from "@/assets/svg/spotify-icon";

const HomePage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HitTheClock</Text>
      <ButtonComponent
        title="Connect to Spotify"
        onPress={() => alert("Test")}
        containerClassName={styles.spotifyButtonContainer}
        textClassName={styles.spotifyButtonText}
      >
        <SpotifyIconSVG width={40} height={40} />
      </ButtonComponent>
    </SafeAreaView>
  );
};

export default HomePage;
