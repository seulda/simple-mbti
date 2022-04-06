// import firebase from 'firebase/app';

// v8
// //import "firebase/auth";
// import "firebase/database";
// //import "firebase/firestore";
// //import "firebase/functions";
// import "firebase/storage";

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';

import firebaseConfigData from '../firebaseConfigData.js';

// Initialize Firebase
const firebaseConfig = {
    databaseURL : firebaseConfigData.databaseURL,
    apiKey: firebaseConfigData.apiKey,
    authDomain: firebaseConfigData.authDomain,
    projectId: firebaseConfigData.projectId,
    storageBucket: firebaseConfigData.storageBucket,
    messagingSenderId: firebaseConfigData.messagingSenderId,
    appId: firebaseConfigData.appId,
    measurementId: firebaseConfigData.measurementId
};

//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()