import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import { bahrainGPResults } from "../../../data/bahrainGPResults";
import { useNavigation } from "@react-navigation/native";

export default function Leaderboard() {
  const navigation = useNavigation();
  const [drivers, setDrivers] = useState(bahrainGPResults);
  const [blink, setBlink] = useState(true);

  const teamColors = {
  "Red Bull Racing": "#1E41FF",
  "Ferrari": "#DC0000",
  "Mercedes": "#00D2BE",
  "McLaren": "#FF8700",
  "Aston Martin": "#006F62",
  "Sauber": "#52E252",
  "RB": "#6692FF",
  "Williams": "#00A3E0",
  "Haas": "#B6BABD",
  "Alpine": "#0090FF",
};
  

  useEffect(() => {
    const interval = setInterval(() => {
      setDrivers((prevDrivers) => {
        const updatedDrivers = [...prevDrivers];
        // Example logic to simulate lap time changes
        updatedDrivers.forEach((driver) => {
          const randomChange = (Math.random() * 0.2 - 0.1).toFixed(3);
          const newTime = (
            parseFloat(driver.lapTime.split(":")[1]) + parseFloat(randomChange)
          ).toFixed(3);
          driver.lapTime = `1:${newTime}`;
        });

        return updatedDrivers;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500); // Blinks every 0.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
    
    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 20, marginTop: 80 }}>
  <Text style={styles.title}>Live</Text>
  <View
    style={[
      styles.blinkingDot,
      { opacity: blink ? 1 : 0.2 }
    ]}
  />
</View>
    <View style={styles.scrollContainer}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabScroll}
            >
              <TouchableOpacity 
  style={styles.tab}
  onPress={() => navigation.navigate('Kalender')}
>
  <Text style={{ color: 'white', fontSize: 20 }}>Kalender</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.tab}
  onPress={() => navigation.navigate('TeamsStanding')}
>
  <Text style={{ color: 'white', fontSize: 20 }}>Hold</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.tab}
  onPress={() => navigation.navigate('DriversStanding')}
>
  <Text style={{ color: 'white', fontSize: 20 }}>Kørere</Text>
</TouchableOpacity>

            </ScrollView>
          </View>
    <FlatList
      data={drivers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
  <View style={styles.item}>
    <View 
      style={[
        styles.colorIndicator, 
        { backgroundColor: teamColors[item.team] || "#999" }
      ]}
    />
    <Text style={styles.position}>{item.position}</Text>
    <Text style={styles.driver}>{item.driver}</Text>
    <Text style={styles.time}>{item.lapTime}</Text>
  </View>
)}

    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  title:{
    fontFamily: "SpecialGothicExpandedOne_400Regular",
    fontSize: 32,
    marginTop:80,
    marginLeft: 20,
    color: "#112045",
  },
  scrollContainer: {
    width: '100%',
  },
  tabScroll: {
    paddingHorizontal: 10,
    alignItems: 'center',
   marginBottom: 20,
    width: '150%',
  },
  tab: {
    backgroundColor: '#112045',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  tabActive: {
    backgroundColor: '#CD1F4D',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#cd1f4d",
    backgroundColor: "#112045",
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  position: { 
    width: 30, 
    fontWeight: "bold", 
    color: "#fff" 
  },
  driver: { 
    flex: 1, 
    color: "#fff" 
  },
  time: { 
    width: 80, 
    textAlign: "right", 
    color: "#fff" 
  },
  blinkingDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#CD1F4D',
    marginLeft: 20,
    alignSelf: 'center',
    marginTop:80,
    
  },
});
