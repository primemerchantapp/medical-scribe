import firebaseConfig from '../firebase.js';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

async function saveScribeData(data) {
    try {
        const docRef = await db.collection('scribe_documents').add(data);
        console.log('Document written with ID: ', docRef.id);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error adding document: ', error);
        return { success: false, error: error.message };
    }
}

export default saveScribeData;
