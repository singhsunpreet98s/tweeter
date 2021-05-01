import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Octicons, Feather, Entypo, AntDesign } from '@expo/vector-icons';


export default function Tweet(props) {
   console.log(props)
   return (
      <View style={styles.mainCont}>
         <View style={styles.leftCont}><Image style={styles.img} source={{ uri: props.data.img }} />
         </View>
         <View style={styles.rightCont}>
            <View style={styles.titleBar}>
               <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
                  {props.data.name}{" "}<Text >
                     <Octicons style={styles.verify} name="verified" size={16} color="#55ADED" /></Text>
                  <Text style={styles.userId} numberOfLines={1} ellipsizeMode='tail'>{" "}@{props.data.userId}</Text>
               </Text>
               <Text style={styles.time}>{" "} <Entypo name="dot-single" size={13} color="gray" />{" "}{props.data.time}</Text>
               <Text style={styles.more}><Feather name="more-horizontal" size={20} color="gray" /></Text>
            </View>
            <View style={styles.tweetContent} ><Text style={styles.tweetTxt}>{props.data.tweet}</Text>
               {props.data.tweetImg.map((item, index) => {
                  return <Image style={styles.tweetedImg} source={{ uri: item.img }} key={index} />
               })}


            </View>
            <View style={styles.bottomBar}>
               <View style={styles.bottomBtn} ><Feather name="message-circle" size={20} color="gray" /></View>
               <View style={styles.bottomBtn}><AntDesign name="hearto" size={18} color="gray" /><Text style={{ color: 'gray', marginLeft: 10 }}>{props.data.likes}</Text></View>
               <View style={styles.bottomBtn} ><AntDesign name="retweet" size={20} color="gray" /><Text style={{ color: 'gray', marginLeft: 10 }}>{props.data.retweets}</Text></View>
               <View style={styles.bottomBtn}><Feather name="share" size={18} color="gray" /><Text style={{ color: 'gray', marginLeft: 10 }}>{props.data.shares}</Text></View>

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
   ,
   bottomBtn: {
      display: 'flex',
      flexDirection: 'row'
   }

})