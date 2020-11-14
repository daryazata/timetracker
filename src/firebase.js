import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC7s1VU8drvImEPkJNOL8u61zfvm0pTf7c",
    authDomain: "timetracker-21732.firebaseapp.com",
    databaseURL: "https://timetracker-21732.firebaseio.com",
    projectId: "timetracker-21732",
    storageBucket: "timetracker-21732.appspot.com",
    messagingSenderId: "92280931781",
    appId: "1:92280931781:web:9fd5420ab796be55ff37ac"
  };

   // Initialize Firebase
   const firebaseApp=  firebase.initializeApp(firebaseConfig);
   //DB
   const db = firebaseApp.firestore()

   export default db