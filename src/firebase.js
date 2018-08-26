import firebase from 'firebase'
import dotenv from 'dotenv'

var config = {
    apiKey: "AIzaSyBNWDXXgvz-jr9QSj8OazuhuTDi-GB6t38",
    authDomain: "kanban-vinesto.firebaseapp.com",
    databaseURL: "https://kanban-vinesto.firebaseio.com",
    projectId: "kanban-vinesto",
    storageBucket: "kanban-vinesto.appspot.com",
    messagingSenderId: "999660129607"
  };
 export const app = firebase.initializeApp(config);
 export const database = firebase.database();