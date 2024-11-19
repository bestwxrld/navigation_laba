import React, { useState } from 'react';
import { View, FlatList, RefreshControl, StyleSheet } from 'react-native';
import ProgrammingCard from '../components/ProgrammingCard';

const programmingLanguages = [
  {
    id: 1,
    language: 'JavaScript',
    experience: '2 года',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    id: 2,
    language: 'Python',
    experience: 'нет',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    id: 3,
    language: 'Go',
    experience: '6 месяцев',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
  },
];

const LanguagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Имитация обновления данных
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={programmingLanguages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProgrammingCard
            language={item.language}
            experience={item.experience}
            logo={item.logo}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
});

export default LanguagesScreen;