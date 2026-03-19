import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />

      <View style={styles.container}>
        <Text style={styles.title}>Página não encontrada</Text>

        <Link href="/about" style={styles.button}>
          Voltar para a tela inicial
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },

  button: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});