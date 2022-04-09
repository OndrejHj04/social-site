import Homepage from "./Homepage";
import CreateAccount from "./CreateAccount";
import LostPassword from "./LostPassword";
import ResetPassword from "./ResetPassword";
import ScrollPage from "./ScrollPage";
import Nav from "./Nav";
import Profile from "./Profile";
import Settings from "./Settings";
import { initializeApp } from "firebase/app";
import { getFirestore, deleteDoc, doc, setDoc, getDoc } from "firebase/firestore";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBYPLSR349hdzUW2t3H0fQGuLvKNiWe-Os",
  authDomain: "blig-b00k.firebaseapp.com",
  projectId: "blig-b00k",
  storageBucket: "blig-b00k.appspot.com",
  messagingSenderId: "266324697396",
  appId: "1:266324697396:web:d738ff1ffc236cddd68561",
  measurementId: "G-8D79LE1FHG",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default function App() {

  function setActive(user) {
    setDoc(doc(db, "active", "1"), {
      ...user,
      id: "aPUSwLUbF7vkhWmvVatU",
    });
  }

  function removeActive() {
    const ref = doc(db, "active", "1");
    deleteDoc(ref);
  }
  

  const fetchData = () => {
    const docRef = doc(db, "users", "aPUSwLUbF7vkhWmvVatU");
    const docSnap = getDoc(docRef);

    docSnap.then((x) => setUser(x.data()))
  };

  const tempData = useRef();

  tempData.current = fetchData;
  useEffect(() => {
    tempData.current();
  }, []);
  const [user, setUser] = useState("");

console.log(user.name)
  return (
    <>
      <Router>
        <Routes>
            <Route path="" element={<Nav removeActive={removeActive} user={user} />}>
              <Route path="" element={<Homepage setActive={setActive} removeActive={removeActive} />} />
              <Route path="guest/CreateAccount" element={<CreateAccount setActive={setActive} />} />
              <Route path="guest/ForgottenPassword" element={<LostPassword />} />
              <Route path="guest/ForgottenPassword/reset" element={<ResetPassword />} />
              <Route path="user/ScrollPage" element={<ScrollPage user={user} />} />
              <Route path="user/Profile" element={<Profile user={user} />} />
              <Route path="user/Settings" element={<Settings />} />
              <Route path="*" element={<Homepage setActive={setActive} removeActive={removeActive} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
