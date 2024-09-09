// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyARh4T4LothfnHVxgp1SVxmpy3NA6YAU5Y',
  authDomain: 'jsproject-6252d.firebaseapp.com',
  databaseURL: 'https://jsproject-6252d-default-rtdb.firebaseio.com',
  projectId: 'jsproject-6252d',
  storageBucket: 'jsproject-6252d.appspot.com',
  messagingSenderId: '161082613703',
  appId: '1:161082613703:web:173445a7de1f2f45ba03e2',
  measurementId: 'G-Q1Y0MPD1D9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
