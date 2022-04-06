import Homepage from "./Homepage";
import CreateAccount from "./CreateAccount";
import LostPassword from "./LostPassword";
import ResetPassword from "./ResetPassword";
import ScrollPage from "./ScrollPage";
import Nav from "./Nav";
import Profile from "./Profile";
import Settings from "./Settings";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBYPLSR349hdzUW2t3H0fQGuLvKNiWe-Os",
  authDomain: "blig-b00k.firebaseapp.com",
  projectId: "blig-b00k",
  storageBucket: "blig-b00k.appspot.com",
  messagingSenderId: "266324697396",
  appId: "1:266324697396:web:d738ff1ffc236cddd68561",
  measurementId: "G-8D79LE1FHG"
};

initializeApp(firebaseConfig);

const db = getFirestore();



export default function App() {

  const usersRef = collection(db, "users");


  onSnapshot(usersRef, (snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
  })
  
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Nav />}>
            <Route path="" element={<Homepage />} />
            <Route path="guest/CreateAccount" element={<CreateAccount  />} />
            <Route path="guest/ForgottenPassword" element={<LostPassword />} />
            <Route path="guest/ForgottenPassword/reset" element={<ResetPassword />} />
            <Route path="user/ScrollPage" element={<ScrollPage />} />
            <Route path="user/Profile" element={<Profile />} />
            <Route path="user/Settings" element={<Settings />} />
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
      
    </>
  );
}
