import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Tweet from '../components/tweet/Tweet'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { tweets } from './tweets'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          tweets.map((item, index) => {
            return <Tweet data={item} key={index} />
          }
          )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },

});
