import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

import FriendItem from "./FriendItem"; 

function FriendsList({ friends, searchText, navigation }){
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={ item => `friend-${item.id}` }
        renderItem={({item}) => (
          searchText === ''?
          <FriendItem friend={item} navigation={navigation}/> :
          item.name.includes(searchText) && <FriendItem friend={item} navigation={navigation}/>
        )}
      />
    </View>
  )
}

export default FriendsList