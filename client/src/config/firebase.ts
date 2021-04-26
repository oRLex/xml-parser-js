import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDSZq4GUFuGhVecflovSrkOONzZovPEMYc",
    authDomain: "xml2json-af690.firebaseapp.com",
    projectId: "xml2json-af690",
    storageBucket: "xml2json-af690.appspot.com",
    messagingSenderId: "658564993865",
    appId: "1:658564993865:web:12a765a63f5a6a8114c098",
    measurementId: "G-EYMMM47WCX"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();