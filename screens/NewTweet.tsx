import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function NewTweet() {
   const [tweetTxt, setTweetTxt] = useState("sssss")
   return (
      <SafeAreaView style={styles.shutter}>
         <View style={styles.cont}>
            <View style={styles.btns}>
               <AntDesign name="close" size={24} color="black" />
               <TouchableOpacity style={(tweetTxt.length > 4) ? styles.ActivetweetBtn : styles.inActivetweetBtn}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Tweet</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.tweetCont}>

            </View>
         </View>

      </SafeAreaView>
   )
}
const styles = StyleSheet.create({
   shutter: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,

   },
   cont: {
      flex: 1,

   },
   btns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      height: 50,
   },
   ActivetweetBtn: {
      marginRight: 5,

      backgroundColor: '#55ADED',
      borderRadius: 20,
      height: 40,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center'
   }
   ,
   inActivetweetBtn: {
      marginRight: 5,
      padding: 8,
      paddingRight: 14,
      paddingLeft: 14,
      backgroundColor: '#1da1f278',

      borderRadius: 20
   },
   tweetCont: {

   }
})