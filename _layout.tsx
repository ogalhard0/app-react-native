import { Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#555",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      { <Stack.Screen name="index" options={{headerShown: false}}/> }
      <Stack.Screen name="books" options={{ title: "Livros disponíveis" }} />
      <Stack.Screen name="config" options={{ title: "Configurações" }} />
    </Stack>
  );
}
 