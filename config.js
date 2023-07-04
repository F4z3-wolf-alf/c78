import firebase from "firebase";
require("@firebase/firestore");


  
  const firebaseConfig = {
  apiKey: "AIzaSyArrcq4Ntk9t3IOIqzTHhXXlyJsOmrr2EI",
  authDomain: "bicicleta-eletronica-ac063.firebaseapp.com",
  projectId: "bicicleta-eletronica-ac063",
  storageBucket: "bicicleta-eletronica-ac063.appspot.com",
  messagingSenderId: "641488532702",
  appId: "1:641488532702:web:335032a056a131fe33be4f"
};



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
