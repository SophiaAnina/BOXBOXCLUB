import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const DataArticles = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>{article.title}</Text>
      {article.sections.map((section) => (
        <View key={section.id} style={{ marginBottom: 12 }}>
          {section.subtitle ? (
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{section.subtitle}</Text>
          ) : null}
          <Text style={{ fontSize: 16 }}>{section.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default DataArticles;