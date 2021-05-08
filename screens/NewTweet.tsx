import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Platform, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { AntDesign, Entypo, Foundation, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function NewTweet() {
   const [tweetTxt, setTweetTxt] = useState("adbbfkjs")
   const navigate = useNavigation();
   var rexExpa = /(@[a-z\d])/g
   var rexExpb = /(#[a-z\d])/g
   const tweetArr = tweetTxt.split(" ")
   const TweetHere = () => {
      // var rexExpa = /(@[a-z\d])/g
      // var rexExpb = /(#[a-z\d])/g
      // const tweetArr = tweetTxt.split(" ")
      tweetArr.map((item, index) => {
         if (item[0] === "@") {
            return <Text style={{ color: 'red' }}>{item}</Text>

         }
         else if (item[0] === "#") {
            return <Text style={{ color: 'blue' }}>{item}</Text>

         }
         else {
            return <Text>{item}</Text>
         }

      })
   }
   return (
      <SafeAreaView style={styles.shutter}>
         <View style={styles.cont}>
            <View style={styles.btns}>
               <AntDesign name="close" style={{ padding: 5 }} size={30} color="black" onPress={() => navigate.goBack()} />
               <TouchableOpacity style={((tweetTxt.length > 4) && (tweetTxt.length < 120)) ? styles.ActivetweetBtn : styles.inActivetweetBtn}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Tweet</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.tweetCont}>
               <Text>{
                  tweetArr.map((item, index) => {
                     if (item[0] === "@") {
                        return <Text style={{ color: 'red' }} key={index} >{` ${item}`}</Text>

                     }
                     else if (item[0] === "#") {
                        return <Text style={{ color: 'blue' }} key={index}>{` ${item}`}</Text>

                     }
                     else {
                        return <Text key={index}>{` ${item}`}</Text>
                     }

                  })}</Text>
               <TextInput
                  style={styles.input}
                  onChangeText={(e) => {

                     setTweetTxt(e)
                  }}

                  autoFocus={true}
                  multiline={true}
               />
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
               <View style={styles.bottom}>
                  <View style={styles.bottomBtns} >
                     <Entypo name="camera" size={24} color='#55ADED' />
                     <Foundation name="photo" size={24} color='#55ADED' />
                     <MaterialCommunityIcons name="google-maps" size={24} color='#55ADED' />
                     <MaterialCommunityIcons name="gif" size={24} color='#55ADED' />
                     <FontAwesome5 name="chart-bar" size={24} color='#55ADED' />
                  </View>
                  <Text style={(tweetTxt.length < 120) ? { color: '#55ADED', width: 100, fontWeight: 'bold', textAlign: 'center' } : { color: 'red', width: 100, fontWeight: 'bold', textAlign: 'center' }}>{(tweetTxt.length < 120) ? 120 - tweetTxt.length : "limit exceed"}</Text>
               </View>
            </KeyboardAvoidingView>
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
      height: 40,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1da1f278',
      borderRadius: 20
   },
   input: {
      margin: 12,
      fontSize: 20

   },
   bottom: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center'
   }
   ,
   tweetCont: {
      flex: 1,
   },
   bottomBtns: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',

   }

})
