import React from "react";
import { Text, View, Image, ImageBackground, Pressable, StyleSheet, 
  SafeAreaView,
  TouchableOpacity, } from "react-native";
import { Link } from 'expo-router';


export default function index() {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://santhatela.com.br/wp-content/uploads/2020/10/pintor-desconhecido-santa-teresa-de-avila-d.jpg' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Boas vindas{'\n'}a{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Santa Doutrina</Text>
            </View>
          </Text>
          <Text style={styles.text}>
            Somos a melhor livraria católica do Brasil! Seja você um sacerdote
            ou um leigo, nós temos um livro pra você. Oferecemos desde 
            os básicos até o mais avançados conteúdos sobre a doutrina católica! 
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Vamos lá!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  /** Hero */
  hero: {
    backgroundColor: '#d8dffe',
    margin: 12,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: '#fff2dd',
    borderRadius: 5,
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#56409e',
  },
  /** Button */
  button: {
    backgroundColor: '#281b52',
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});



