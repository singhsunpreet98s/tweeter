import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Octicons, Feather, Entypo, AntDesign } from '@expo/vector-icons';
export default function Tweet() {
   return (
      <View style={styles.mainCont}>
         <View style={styles.leftCont}><Image style={styles.img} source={{ uri: 'https://pbs.twimg.com/profile_images/950815117448499200/XVFH6rjh_400x400.jpg' }} />
         </View>
         <View style={styles.rightCont}>
            <View style={styles.titleBar}>
               <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
                  Alina grande{" "}<Text >
                     <Octicons style={styles.verify} name="verified" size={16} color="#55ADED" /></Text>
                  <Text style={styles.userId} numberOfLines={1} ellipsizeMode='tail'>{" "}@alianaGrande</Text>
               </Text>
               <Text style={styles.time}>{" "} <Entypo name="dot-single" size={13} color="gray" />{" "}8h</Text>
               <Text style={styles.more}><Feather name="more-horizontal" size={20} color="gray" /></Text>
            </View>
            <View style={styles.tweetContent} ><Text style={styles.tweetTxt}>Do you have any web dev projects if yes then see this itsd a new tweet which was used by lorem ipsum dolar new lorem ipasum daolr </Text>
               <Image style={styles.tweetedImg} source={{ uri: 'https://i.pinimg.com/originals/12/52/68/125268895881409af0fa4b7eed214a57.jpg' }} />
            </View>
            <View style={styles.bottomBar}>
               <Text style={styles.bottomBtn}><Feather name="message-circle" size={20} color="gray" /></Text>
               <Text style={styles.bottomBtn}><AntDesign name="hearto" size={20} color="gray" />{" "}20</Text>
               <Text style={styles.bottomBtn}><AntDesign name="retweet" size={20} color="gray" /></Text>
               <Text style={styles.bottomBtn}><Feather name="share" size={20} color="gray" /></Text>

            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   mainCont: {

      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      padding: 10

   },
   leftCont: {
      width: '20%',
      padding: 10,

   },
   img: {
      width: 50,
      height: 50,
      borderRadius: 25,
   },
   titleBar: {
      height: 20,
      display: 'flex',
      flexDirection: 'row'
   },
   title: {
      fontWeight: 'bold',
      fontSize: 16,
      maxWidth: '75%',
      overflow: 'hidden',
      display: 'flex'
   },
   rightCont: {
      paddingLeft: 10,
      width: '80%'

   },
   more: {
      position: 'absolute',
      right: 0
   },
   userId: {
      maxWidth: 70,
      fontWeight: '100',
      color: 'gray'
   },
   time: {
      fontSize: 15,
      color: 'gray'

   },
   verify: {
      marginLeft: 20,

   },
   tweetContent: {
      paddingTop: 2,
      display: 'flex',
      alignItems: 'center',

   },
   tweetedImg: {
      borderRadius: 10,
      marginTop: 10,
      width: '100%',
      height: 130,
      resizeMode: 'cover',
   },
   tweetTxt: {
      fontSize: 15
   },
   bottomBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 5
   }
   , bottomBtn: {
      display: 'flex',
      justifyContent: 'center',
      color: 'red'
   }
})