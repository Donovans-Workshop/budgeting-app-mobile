import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image
        source={require('../../assets/logo.png')} // Replace with your logo file
        style={styles.logo}
      />

      {/* Main Heading */}
      <Text style={[styles.heading, { color: theme.colors.onBackground }]}>
        Take Control of Your Finances
      </Text>

      {/* Subheading */}
      <Text style={[styles.subheading, { color: theme.colors.onBackground }]}>
        Join over <Text style={styles.highlight}>8 million users</Text> who have
        saved over <Text style={styles.highlight}>$1 billion</Text>
      </Text>

      {/* Quote Section */}
      <View style={styles.quoteContainer}>
        <Text style={[styles.quote, { color: theme.colors.onBackground }]}>
          “The app that will save you hundreds of dollars.”
        </Text>
        <Text style={styles.quoteSource}>— Forbes</Text>
      </View>

      {/* Buttons */}
      <Button
        mode='contained'
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('auth/signup')}>
        Create Account
      </Button>
      <Button
        mode='text'
        style={styles.loginButton}
        onPress={() => navigation.navigate('auth/login')}>
        Have An Account? Log in
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white', // Match the app's theme
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  highlight: {
    fontWeight: 'bold',
  },
  quoteContainer: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  quote: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 8,
  },
  quoteSource: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  createAccountButton: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#800020', // Match the red button color
  },
  loginButton: {
    marginTop: 8,
  },
});
