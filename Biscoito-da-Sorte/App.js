import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const phrases = [
  "Você terá um dia incrível!",
  "A sorte está ao seu lado hoje, ou correndo a sua frente!.",
  "A única coisa fitness hoje será sua paciência.",
  "Confie no seu potencial.",
  "A resposta está dentro de você. Ou no Google.",
  "Parabéns! Você abriu o cookie certo."
];

export default function App() {
  const [message, setMessage] = useState('');
  const [cookieImage, setCookieImage] = useState(require('./assets/cookieFechado.png'));

  function breakCookie() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setMessage(randomPhrase);
    setCookieImage(require('./assets/CookieAberto.png'));
  }

  return (
    <View style={styles.container}>
      <Image source={cookieImage} style={styles.image} />
      <Text style={styles.text}>{message}</Text>

      <TouchableOpacity style={styles.button} onPress={breakCookie}>
        <Text style={styles.buttonText}>Quebrar Biscoito</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
