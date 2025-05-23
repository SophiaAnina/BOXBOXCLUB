import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
export default function DataArticles({ route }) {
  const article = route?.params?.article;

  if (!article) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red", fontSize: 18 }}>Ingen artikel valgt.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{article.title}</Text>
      {article.sections.map((section) => (
        <View key={section.id} style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{section.subtitle}</Text>
          <Text>{section.content}</Text>
        </View>
      ))}
    </View>
  );
}