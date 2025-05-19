import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TeamsStandingScreen() {
    const navigation = useNavigation();
  const standings = [
    { position: 'P1', team: 'Mclaren', points: 125 },
    { position: 'P2', team: 'Redbull', points: 120 },
    { position: 'P3', team: 'Mercedes', points: 110 },
    { position: 'P4', team: 'Haas', points: 100 },
    { position: 'P5', team: 'Racing Bull', points: 90 },
    { position: 'P6', team: 'Sauber', points: 85 },
    { position: 'P7', team: 'Ferrari', points: 70 },
    { position: 'P8', team: 'Williams', points: 65 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live</Text>
      <Text style={styles.sectionTitle}>Mesterskab</Text>
      <ScrollView>
        {standings.map((team, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.position}>{team.position}</Text>
            <Text style={styles.team}>{team.team}</Text>
            <Text style={styles.points}>{team.points}</Text>
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
    fontSize: 24,
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
  team: { color: '#fff', flex: 1 },
  points: { color: '#CD1F4D', width: 50, textAlign: 'right' },
});
