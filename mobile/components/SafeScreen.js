import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/constants/colors";

export default function SafeScreen({ children }) {
  const insets = useSafeAreaInsets();
//   console.log({ COLORS });

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    color: "white",
  },
});
