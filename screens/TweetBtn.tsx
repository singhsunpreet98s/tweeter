import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TweetBtn() {
   const navigator = useNavigation();
   return (
      <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={() => navigator.navigate('newTweet')}>
         <MaterialCommunityIcons name="feather" size={24} color="white" />
      </TouchableOpacity>
   )
}
const styles = StyleSheet.create({
   btn: {
      backgroundColor: '#55ADED',
      height: 55,
      width: 55,
      position: 'absolute',
      bottom: 10,
      right: 10,
      zIndex: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 27

   }
})