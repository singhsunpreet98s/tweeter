import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Tweet from '../components/tweet/Tweet'

import { Text, View } from '../components/Themed';
import { tweets } from './tweets';
import { useNavigation } from '@react-navigation/native';

import TweetBtn from '../screens/TweetBtn';
export type TypeData = { img: String, name: String, userId: String, time: String, tweet: String, tweetImg: [{ img: String, name: String }], likes: String, retweets: String, shares: String }
export default function TabOneScreen() {
  const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <TweetBtn />
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
