import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="inicio" options={{ title: 'Inicio' }} />
      <Stack.Screen name="Sobre" options={{ title: 'Sobre' }} />
    </Stack>
  );
}