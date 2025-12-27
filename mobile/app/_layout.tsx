import { Slot, Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
const RootLayout = () => {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
};

export default RootLayout;
{
  /* <Stack screenOptions={{ headerShown: false }} /> */
}
