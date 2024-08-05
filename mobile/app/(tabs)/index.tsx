import { Button, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

export default function HomeScreen() {
  const onGoogleLogin = async () => {
    const redirectUrl = Linking.createURL("/");
    const response = await WebBrowser.openAuthSessionAsync(
      `https://6aeb-104-28-213-127.ngrok-free.app/google/redirect?redirectTo=${redirectUrl}`,
      redirectUrl
    );
    console.log(response.url.split("=")[1].split("&")[0]);
  };

  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={onGoogleLogin} title="Login with googles" />
    </View>
  );
}
