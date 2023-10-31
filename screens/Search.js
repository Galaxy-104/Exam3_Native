import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, SafeAreaView, Modal, TextInput } from 'react-native'

import FriendsList from '../components/FriendsList'
import SearchFriend from '../components/SearchFriend'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Search({ navigation }){

  const [ friends, setFriends ] = useState([
    { id: 1, name: '우주', email: 'uzu@naver.com', address: '서울특별시', interest: '노래' },
    { id: 2, name: '은하', email: 'galaxy@gmail.com', address: '대전광역시', interest: '영화' },
    { id: 3, name: '샛별', email: 'venus@kakao.com', address: '부산광역시', interest: '게임' },
  ]) 
  const userCategory = ['이름', '이메일', '주소', '관심사']

  const [ searchText, setSearchText ] = useState('')
  const [ modalOpen, setModalOpen ] = useState(false) 

  
  const addFriend = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <SafeAreaView style={styles.block}>
      
      <Modal
        animationType='fade'
        visible={modalOpen}
        transparent={true}
        onRequestClose={() => {
          setModalOpen(!modalOpen)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.InputContainer}>
              <View style={{ justifyContent: 'center', marginRight: 15, marginTop: 5 }}>
                {userCategory.map((item) => {
                  return (
                    <Text style={styles.modalText}>
                      {item}
                    </Text>
                  )
                })}
              </View>
              <View style={{ justifyContent: 'center' }}>
                <View style={styles.InputBox}>
                  <TextInput
                    placeholder="이름을 입력해주세요."
                    style={styles.modalInput}
                  />
                </View>
                <View style={styles.InputBox}>
                  <TextInput
                    placeholder="이메일을 입력해주세요."
                    style={styles.modalInput}
                  />
                </View>
                <View style={styles.InputBox}>
                  <TextInput
                    placeholder="주소를 입력해주세요."
                    style={styles.modalInput}
                  />
                </View>
                <View style={styles.InputBox}>
                  <TextInput
                    placeholder="관심사를 입력해주세요."
                    style={styles.modalInput}
                  />
                </View>
              </View>
              
            </View>

            <View style={styles.modalButtons}>
              <Pressable 
                style={[styles.modalButton, { marginRight: 10, backgroundColor: '#aaa' }]}
                onPress={closeModal}
              >
                <Text style={{ textAlign: 'center', color: "#fff" }}>취소</Text>
              </Pressable>
              <Pressable style={[styles.modalButton, { backgroundColor: '#148cff'}]}>
                <Text style={{ textAlign: 'center', color: "#fff" }}>등록</Text>
              </Pressable>
            </View>
          </View>
          
        </View>
        
      </Modal>

      <View>
        <SearchFriend searchText={searchText} setSearchText={setSearchText}/>
        <FriendsList friends={friends} searchText={searchText} navigation={navigation}/>
        
      </View>
      <Pressable style={styles.addButton} onPress={addFriend}>
        <Icon name="add-circle" color="#333" size={50}/>
      </Pressable>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 10,
    marginRight: 10,
  },
  InputContainer: {
    width: 250, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
      width: 300,
      margin: 50,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  modalText: {
    fontSize: 15,
    marginBottom: 14
  },
  InputBox: {
    marginBottom: 5,
  },
  modalInput : {
    fontSize: 15,
    paddingVertical: -1,
    borderWidth: 1,
    paddingLeft: 10
  },
  modalButtons : {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  modalButton: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})

export default Search