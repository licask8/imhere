import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Nome do evento
        </Text>
        <Text style={styles.eventDate}>
         Quinta, 30 de setembro de 2022
        </Text>
  </View>
  );
}