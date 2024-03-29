import { View } from "react-native";
import { Navigation } from "./screens/Navigation";

export default function App() {
  return (
    <View style={{ position: "relative", flex: 1 }}>
      <Navigation />
    </View>
  );
}
