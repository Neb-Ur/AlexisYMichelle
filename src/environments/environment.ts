// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyD8VR75j84sb7YaDrhS2fOd5vsYO9zSefQ',
  authDomain: 'bastianydani-95e93.firebaseapp.com',
  projectId: 'bastianydani-95e93',
  storageBucket: 'bastianydani-95e93.appspot.com',
  messagingSenderId: '938240295055',
  appId: '1:938240295055:web:419d5bf98af449b796f0fa',
  sheet: {
    CONNECTION_URL:
      'https://sheet.best/api/sheets/35240873-a1b0-462c-b7fb-6f9c436ecc69',
  },
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
