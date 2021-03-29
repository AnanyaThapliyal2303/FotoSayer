import firebase from "firebase";

  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyB7S-i67OUJN2RYTp5IHk7HtMoKhfcM7GI",
    authDomain: "insta-clone-react-c585d.firebaseapp.com",
    projectId: "insta-clone-react-c585d",
    storageBucket: "insta-clone-react-c585d.appspot.com",
    messagingSenderId: "235277837913",
    appId: "1:235277837913:web:43c2eceb9f67b210fdb348",
    measurementId: "G-JJKRWT5DSE"
  });

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const storage= firebase.storage();
  export{db, auth, storage};

  //export default db;