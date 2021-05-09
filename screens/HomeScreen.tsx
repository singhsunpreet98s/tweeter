import * as React from 'react';
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import Tweet from '../components/tweet/Tweet'
import { View } from '../components/Themed';
import { tweets } from './tweets';
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import TweetBtn from '../screens/TweetBtn';
export interface TweetProps {
  data: {
    img: string,
    name: string,
    userId: string,
    time: string, tweet: string,
    tweetImg: { img: string, name: string }[],
    likes: string,
    retweets: string,
    shares: string
  }
}

export default function Home() {
  const [isRefreshing, setRefresh] = React.useState(false)
  const navigation = useNavigation()
  const renderItem = ({ item }: any) => {
    console.log(item)
    return <Tweet data={item} />
  }

  return (

    <View style={styles.container}>
      <TweetBtn />


      <FlatList
        data={tweets}
        renderItem={renderItem}
        refreshing={isRefreshing}
        onRefresh={() => setRefresh(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
