import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

import FriendItem from "./FriendItem"; 

function FriendsList({ friends }){
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={ item => `friend-${item.id}` }
        renderItem={({item}) => (
          <FriendItem friend={item}/>
        )}
      />
    </View>
  )
}

export default FriendsList