import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function KalenderScreen() {
    const navigation = useNavigation();
  const races = [
    { round: 5, country: 'Italien', date: '16-18 Maj' },
    { round: 6, country: 'Monaco', date: '23-25 Maj' },
    { round: 6, country: 'Spanien', date: '30-01 Maj-juni' },
    { round: 6, country: 'Canada', date: '13-15 juni' },
    { round: 6, country: 'Østrig', date: '27-29 juni' },
    { round: 7, country: 'Singapore', date: '27-29 juni' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live</Text>
      <Text style={styles.sectionTitle}>Kalender</Text>
      <ScrollView>
        {races.map((race, index) => (
          <TouchableOpacity key={index} style={styles.raceItem}>
            <Text style={styles.raceText}>Runde {race.round} — {race.country}</Text>
            <Text style={styles.date}>{race.date}</Text>
          </TouchableOpacity>
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
    fontSize: 24,
    marginVertical: 20,
  },
  raceItem: {
    backgroundColor: '#1E2C4C',
    padding: 16,
    marginVertical: 6,
    borderRadius: 10,
  },
  raceText: { color: '#fff', fontSize: 18 },
  date: { color: '#CD1F4D', fontSize: 16, marginTop: 4 },
});
