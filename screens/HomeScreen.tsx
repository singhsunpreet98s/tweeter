import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Tweet from '../components/tweet/Tweet'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },

});
