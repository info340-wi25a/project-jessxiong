import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './components/App.jsx'
<<<<<<< HEAD
=======

>>>>>>> ddff872647374fc10f3586e6627af035c516bf2e
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter> <App /> </BrowserRouter>);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvjKgmy8dWfopGeL_QnLoHkqykstzj4yw",
  authDomain: "focusflow-e51d5.firebaseapp.com",
  databaseURL: "https://focusflow-e51d5-default-rtdb.firebaseio.com",
  projectId: "focusflow-e51d5",
  storageBucket: "focusflow-e51d5.firebasestorage.app",
  messagingSenderId: "393874659945",
  appId: "1:393874659945:web:0ff343b0e62a42c95960f8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter> <App /> </BrowserRouter>);
