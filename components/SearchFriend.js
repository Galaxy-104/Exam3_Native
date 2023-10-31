import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

function SearchFriend({ searchText, setSearchText }){

  const handleChange = (text) => {
    if(/\n/.test(text)){
      onPress()
    }else{
      setSearchText(text)
    }
  }

  return (
    <View style={styles.searchContainer}>
      <View>
        <Icon name="search" color="#333" size={30}/>
      </View>

      <TextInput
        value={searchText}
        onChangeText={handleChange}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default SearchFriend