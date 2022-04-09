import Logo from "./Logo";
import { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

export default function Homepage(props) {
  const [login, setLogin] = useState({ name: "", password: "" });
  const navigate = useNavigate();
  const db = getFirestore();
  const userRef = collection(db, "users");
  const tempData = useRef();
  const [users, setUsers] = useState()

  props.removeActive()

  function change(event) {
    setLogin((oldVal) => {
      return {
        ...oldVal,
        [event.target.name]: event.target.value,
      };
    });
  }

  function redirect(event) {
    event.preventDefault();
    users.forEach(item=>{
      if(item.name === login.name && item.password === login.password){
      props.setActive(item)
        navigate("/user/ScrollPage");
      }
    })
    
  }


  const fetchData = () => {
    onSnapshot(userRef, (snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setUsers(users)      
    });
  };
  tempData.current = fetchData;


  useEffect(()=>{
    tempData.current()
  },[])

  return (
    <>
      <Outlet />
      <div className="pt-14 max-w-3xl mx-auto flex flex-wrap px-2" id="wrap">
        <div className="mx-auto">
          <Logo />
          <p className="text-lg text-center">Place for all bligumakers</p>
        </div>

        <div className="mx-auto">
          <form className="flex flex-col  p-4 pt-0 text-xl" onSubmit={redirect}>
            <input type="text" className="p-1 border-2 my-2" placeholder="Name" name="name" onChange={change} value={login.name} />

            <input type="text" className="p-1 border-2 my-2" placeholder="Password" name="password" onChange={change} value={login.password} />
            <button className=" p-2 bg-logo-blue text-white rounded-2xl mx-auto my-2 active:bg-dark-logo-blue">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
