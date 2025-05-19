import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DriversStandingScreen() {
    const navigation = useNavigation();
  const standings = [
    { position: 'P1', driver: 'Max Verstappen', points: 125 },
    { position: 'P2', driver: 'Lando Norris', points: 120 },
    { position: 'P3', driver: 'Oscar Piastri', points: 110 },
    { position: 'P4', driver: 'George Russell', points: 100 },
    { position: 'P5', driver: 'Kimi Antonelli', points: 90 },
    { position: 'P6', driver: 'Yuki Tsunoda', points: 85 },
    { position: 'P7', driver: 'Charles Leclerc', points: 70 },
    { position: 'P8', driver: 'Lewis Hamilton', points: 65 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live</Text>
      <Text style={styles.sectionTitle}>Mesterskab — Kørernes Stilling</Text>
      <ScrollView>
        {standings.map((driver, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.position}>{driver.position}</Text>
            <Text style={styles.driver}>{driver.driver}</Text>
            <Text style={styles.points}>{driver.points}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#112045', flex: 1 },
  title: {
    fontFamily: "SpecialGothicExpandedOne_400Regular",
    fontSize: 32,
    marginTop: 40,
    color: "#fff",
  },
  sectionTitle: {
    color: "#CD1F4D",
    fontSize: 20,
    marginVertical: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E2C4C',
    padding: 16,
    marginVertical: 6,
    borderRadius: 10,
  },
  position: { color: '#fff', width: 50 },
  driver: { color: '#fff', flex: 1 },
  points: { color: '#CD1F4D', width: 50, textAlign: 'right' },
});
