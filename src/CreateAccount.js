import Logo from "./Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
export default function CreateAccount(props) {
  const [createProfile, setCreateProfile] = useState({ name: "", age: "", email: "", password: "", password2: "", licence: false });
  const [error, setError] = useState()
  const navigate = useNavigate();

  function change(event) {
    setCreateProfile((oldVal) => {
      return {
        ...oldVal,
        [event.target.name]: event.target.name === "licence" ? event.target.checked : event.target.value,
      };
    });
  }
 
  function submit(event) {
    event.preventDefault();
    if (props.all) {
      const usedEmails = props.all.map((item) => item.email);
      const usedNames = props.all.map((item) => item.name);
      const db = getFirestore();
      const userRef = collection(db, "users");

      if (!createProfile.password === createProfile.password2 ) {
        setError("Passwords must match!")
      }else if(createProfile.password.length < 5){
        setError("Password needs to be longer!")
      }else if(usedNames.includes(createProfile.name)){
        setError("This username is already taken!")
      }else if(usedEmails.includes(createProfile.email)){
        setError(`An account with this email is already created. Please sing in!`)
      }else{
  // sometimes user is not recognized as active => create profile behaves like undefined
        props.setActive(createProfile); 
        addDoc(userRef, createProfile);
        navigate("/user/ScrollPage");
        window.location.reload(false); // refresh that is not ideal fixing problem with getting active user data to scrollPage => problem at App.js
      }
    }
  }
  console.log(createProfile)
  return (
    <>
      <div className="flex flex-col w-11/12 mx-auto max-w-2xl my-10">
        <Logo class="mx-auto my-4" />

        <form className="flex flex-col text-xl max-w-96 mx-auto" onSubmit={submit}>
          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Username</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="name" type="text" onChange={change} value={createProfile.name} required />
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Age</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="age" type="number" onChange={change} value={createProfile.age} required />
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Email</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="email" type="text" onChange={change} value={createProfile.email} required />
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Password</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="password" type="password" onChange={change} value={createProfile.password} autoComplete="" required />
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Confirm password</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="password2" type="password" onChange={change} value={createProfile.password2} autoComplete="" required />
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 text-base">I agree with licence agreements</label>
            <input className="m-2 p-1" type="checkbox" name="licence" onChange={change} checked={createProfile.licence} required />
          </div>
          <button className=" p-2 bg-logo-blue text-white rounded-2xl mx-auto my-2 active:bg-dark-logo-blue">Register</button>
        </form>
        {error && <p className="text-center">{error}</p>}
      </div>
    </>
  );
}
