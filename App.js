import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Search from './screens/Search'

function App({ navigation }){

  return (
    <View>
      <Text>
        홈화면
      </Text>
      
      <Search navigation={navigation}/>
    </View>
  )

}

export default App
