import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main.js';
import DetailView from '../pages/DetailView.js';


const Stack = createStackNavigator();

const StackNavi = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ffd6aa",
                    shadowColor: "#fff",
                    height: 100,
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginBottom: 8
                },
                headerTintColor: "#FFFFFF",
                headerBackTitleVisible: false,
            }}
        >
            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣어서 이 자체로 페이지 기능을 함 */}
            {/* 가장 먼저 그려지는 페이지가 첫 페이지로 동작 */}
            <Stack.Screen name="Main" component={Main} options={{ title: 'SIMPLE-MBTI' }}/>
            <Stack.Screen name="DetailView" component={DetailView} options={{ title: 'DetailView' }} />

        </Stack.Navigator>
    )
}

export default StackNavi;