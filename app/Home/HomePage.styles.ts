import { StyleSheet } from "react-native";

import SpotifyButtonStyles from "../../components/Buttons/SpotifyButton.styles";
import RulesButtonStyles from "@/components/Buttons/RulesButton.styles";

export default StyleSheet.create({
  ...SpotifyButtonStyles,
  ...RulesButtonStyles,
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#0B1616", // Dorian black
  },
  buttonContainer: {
    marginTop: 150,
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    paddingTop: 150,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
