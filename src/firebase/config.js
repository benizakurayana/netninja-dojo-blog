import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBvdIhcSgubcpF6mup_7LEcv4bviTDhMk4",
    authDomain: "netninja-vue-sites-a4b05.firebaseapp.com",
    projectId: "netninja-vue-sites-a4b05",
    storageBucket: "netninja-vue-sites-a4b05.appspot.com",
    messagingSenderId: "874585751097",
    appId: "1:874585751097:web:54cfe1d1897c71da88d7e8"
  };

  // Init firebase
  firebase.initializeApp(firebaseConfig)

  // Init firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore,timestamp }