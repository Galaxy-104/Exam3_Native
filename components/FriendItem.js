import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'

import Profile from '../assets/imgs/profile.png'
import Icon from 'react-native-vector-icons/MaterialIcons'

function FriendItem({ friend }){
  return (
    <View style={styles.friendContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ overflow: 'hidden'}}>
          <Image source={Profile} style={styles.friendImage}/>
        </View>

        <View>
          <Text style={styles.friendName}>{friend.name}</Text>
          <Text style={styles.friendEmail}>{friend.email}</Text>
        </View>
      </View>

      <View>
        <Icon name="arrow-forward-ios" color="#333" size={25}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  friendContainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  friendImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  friendName: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  friendEmail: {
    fontSize: 16,
  },

})

export default FriendItem

