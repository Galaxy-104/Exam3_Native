import React, { useEffect, useState } from 'react'
import { 
  View, Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import profile from '../assets/imgs/profile.png'

function Detail({ navigation, route }){

  const [ loading, setLoading ] = useState(true)
  const [ userData, setUserData ] = useState([])

  useEffect(() => {
    const { name, email, address, interest } = route.params
    setUserData([name, email, address, interest])
    setLoading(false)
  }, [])
  
  const goToSearch = () => {
    navigation.navigate('Search')
  }

  const userCategory = ['이름', '이메일', '주소', '관심사']

  return (
    <SafeAreaView style={styles.block}>
      <StatusBar></StatusBar>
      <View style={styles.detailContainer}>
        <TouchableOpacity onPress={goToSearch} style={styles.backBtn}>
          <Icon name="arrow-back-ios" color="#333" size={30}/>
        </TouchableOpacity>

        <View style={{ marginTop: 100 }}>
          <View>
            <Image source={profile} style={styles.profileImage}/>
          </View>

          <View style={styles.profileContainer}>
            <FlatList
              data={userCategory}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <Text style={styles.text}>
                  {item}
                </Text>
              )}
            />

            <View>
              {loading? '' : 
              userData.map((data) => {
                return <Text style={styles.text} key={`${route.params.name}-${data}`}>{data}</Text>
              })
              }
            </View>
            
            
          </View>
        </View>
        
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  detailContainer: {
    justifyContents: 'center',
    alignItems: 'center'
  },
  backBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  profileContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
})

export default Detail