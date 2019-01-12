import firebase from 'firebase/app';
import 'firebase/database';
import config from './config';


// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.database();

export default {
    db
};

