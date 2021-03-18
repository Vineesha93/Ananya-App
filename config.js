import firebase from 'firebase';
require('@firebase/firestore')
// const firebaseConfig = {
//   apiKey: "AIzaSyD9iaNZkscjfzT9uBFSMSeOqSGVQ1DK_Nw",
//   authDomain: "awareness-on-mental-helath.firebaseapp.com",
//   projectId: "awareness-on-mental-helath",
//   storageBucket: "awareness-on-mental-helath.appspot.com",
//   messagingSenderId: "1024004186482",
//   appId: "1:1024004186482:web:042066eb3d449b8aa17deb"
// };
var firebaseConfig = {
  apiKey: "AIzaSyD9iaNZkscjfzT9uBFSMSeOqSGVQ1DK_Nw",
  authDomain: "awareness-on-mental-helath.firebaseapp.com",
  databaseURL: "https://awareness-on-mental-helath-default-rtdb.firebaseio.com",
  projectId: "awareness-on-mental-helath",
  storageBucket: "awareness-on-mental-helath.appspot.com",
  messagingSenderId: "1024004186482",
  appId: "1:1024004186482:web:042066eb3d449b8aa17deb"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();