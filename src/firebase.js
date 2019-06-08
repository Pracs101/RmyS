import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAAFy8SX9qgwRQdhFqjOx8GxR8CXhqURoU",
  authDomain: "rmys-a7540.firebaseapp.com",
  databaseURL: "https://rmys-a7540.firebaseio.com",
  projectId: "rmys-a7540",
  storageBucket: "rmys-a7540.appspot.com",
  messagingSenderId: "1055803503222",
  appId: "1:1055803503222:web:db3f5ea0a23c948b"
};

const fbase = firebase.initializeApp(config);

export default fbase;