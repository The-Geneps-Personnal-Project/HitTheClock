import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ButtonComponent from "../../components/Buttons/button";
import styles from "./HomePage.styles";
import SpotifyIconSVG from "@/assets/svg/spotify-icon";

const HomePage: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>HitTheClock</Text>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            title="Read the Rules"
            onPress={() => alert("Read the rules")}
            containerClassName={styles.rulesButtonContainer}
            textClassName={styles.rulesButtonText}
          />
          <ButtonComponent
            title="Connect to Spotify"
            onPress={() => alert("Test")}
            containerClassName={styles.spotifyButtonContainer}
            textClassName={styles.spotifyButtonText}
          >
            <SpotifyIconSVG width={40} height={40} />
          </ButtonComponent>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomePage;
