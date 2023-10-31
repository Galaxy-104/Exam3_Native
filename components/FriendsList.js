import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

import FriendItem from "./FriendItem"; 

function FriendsList({ friends, searchText }){
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={ item => `friend-${item.id}` }
        renderItem={({item}) => (
          searchText === ''?
          <FriendItem friend={item}/> :
          item.name.includes(searchText) && <FriendItem friend={item}/>
        )}
      />
    </View>
  )
}

export default FriendsList