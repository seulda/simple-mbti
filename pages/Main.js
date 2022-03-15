import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import mbtiType from '../mbti-type.json';
import Profile from '../components/Profile.js';
import Loading from '../components/Loading.js';


export default function Main({ navigation, route }) {
  // console.disableYellowBox = true;

  //useState 사용법 : [state,setState] 에서 
  //state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
  //setState는 state를 변경시킬때 사용해야하는 함수
  //useState()안에 전달되는 값은 state 초기값
  // const [state, setState] = useState([])
  const [mbti, setMbti] = useState([])
  const [ready, setReady] = useState(true)

  //하단의 return 문이 실행되어 화면이 그려진다음 실행되는 useEffect 함수
  //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
  useEffect(() => {
    
    setTimeout(() => {
      let mbti = mbtiType.description;
      setMbti(mbti)
      setReady(false)
    }, 1000)

  }, [])


  return ready ? (<Loading />) : (

    <ScrollView style={styles.container}>

      <StatusBar style="black" />
  
      {/* 상단 탭 누르면 카테고리 따라 분류된 데이터 출력해주는 페이지 */}
      <TouchableOpacity style={styles.detailViewButtonContainer} onPress={() => { navigation.navigate('DetailView') }}>
        <Text style={styles.detailViewButtonText}>통합플랫폼팀 MBTI 보러가기</Text>
      </TouchableOpacity>

      {/* mbti type profile */}
      <View style={styles.middleContainer} indicatorStyle={"white"}>
        {
          mbti.map((content, i) => {
            return (<Profile content={content} key={i} />)
          })
        }
      </View>

    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {          //앱의 배경 색
    backgroundColor: '#fff',
  },

  middleContainer: {
    flexWrap: "wrap",
    flexDirection: "row", 
    margin: 10,
    padding: 5,
    marginLeft: 10,
  },

  detailViewButtonContainer: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    padding: 3,
  },
  detailViewButtonText: {
    margin: 10,
    color: "#fff",
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center'
  },

});