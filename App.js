import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Syifa Nur Medina (5B) </Text>

      {/* Container untuk dua kotak */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={[styles.box, {backgroundColor: 'maroon'}]} />
        {/* Kotak 2 */}
        <View style={[styles.box, {backgroundColor: 'pink'}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Warna abu-abu terang
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 25, // Memberikan jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Menyusun kotak secara horizontal
    justifyContent: 'space-between', // Memberikan jarak merata di antara kotak
    alignItems: 'center',
    width: '80%', // Lebar container untuk mengatur posisi kotak
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default App;
