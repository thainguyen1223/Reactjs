import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp({
    apiKey: "AIzaSyDWMxX6LqQcm3Xb3untWlojRl2nUqavtfg",
    authDomain: "reactjs-648cf.firebaseapp.com",
    projectId: "reactjs-648cf",
});
var db = firebase.firestore();
export default db;