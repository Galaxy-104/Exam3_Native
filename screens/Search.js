import React, { useState } from 'react'
import { View, Text } from 'react-native'

import FriendsList from '../components/FriendsList'

function Search(){

  const [ friends, setFriends ] = useState([
    { id: 1, name: '우주', email: 'uzu@naver.com', address: '서울특별시', interest: '노래' },
    { id: 2, name: '은하', email: 'galaxy@gmail.com', address: '대전광역시', interest: '영화' },
    { id: 3, name: '샛별', email: 'venus@kakao.com', address: '부산광역시', interest: '게임' },
  ]) 

  return (
    <View>
      <Text>친구 목록 검색</Text>
      <FriendsList friends={friends}/>
    </View>
  )
}

export default Search