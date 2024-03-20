// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { redirect } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMdcjZVnDgi015-rVq9eEne8zrc9XLt54",
  authDomain: "meowmeow2.firebaseapp.com",
  projectId: "meowmeow2",
  storageBucket: "meowmeow2.appspot.com",
  messagingSenderId: "292101105111",
  appId: "1:292101105111:web:969d441ae8e9c8ded19792"
};

// getter and setter function(login, register, createCat, editCat)

// get list of all cats(own and other users) and if too many(30) then load more
// Also a search functionality
// if the cat is in users own family than show on top 


// signIn and login function
// function to register to firebase project
const register = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCred) => {
    console.log(userCred.user);
    redirect('/login')
  }).catch((err) => {
    console.log(err.code);
  })
}

// function to login to firebase project
const logIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCred) => {
    console.log(userCred.user.email);
      redirect('/catdashboard')
  }).catch((err) => {
    console.log(err)
  })
}

const signOutFun = async () => {
  await signOut(auth).then(() => {
    redirect('/login');
  }).catch((err) => {
    console.log(err);
  })
} 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {register, logIn, signOutFun, auth}