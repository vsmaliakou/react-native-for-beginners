import { View, ActivityIndicator, Text } from "react-native";

export const Loader = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />

      <Text style={{ marginTop: 15 }}>Загрузка...</Text>
    </View>
  );
};
