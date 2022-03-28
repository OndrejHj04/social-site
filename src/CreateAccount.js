import Logo from "./Logo";
import { useState } from "react";
import database from './db.json'
import { useNavigate } from "react-router-dom";
export default function CreateAccount() {

  const [createProfile, setCreateProfile] = useState({name: "", age: "", email: "", password: "", password2: "", licence: false})
  const navigate = useNavigate()

  function change(event){
    setCreateProfile(oldVal=>{
      return {
        ...oldVal,
        [event.target.name]: event.target.name==="licence" ? event.target.checked : event.target.value
      }
    })
  }

  function submit(event){
    event.preventDefault()
    database.users.push(createProfile)
    navigate("/ScrollPage")
  }

  return (
    <>

      <div className="flex flex-col w-11/12 mx-auto max-w-2xl my-10">
        <Logo class="mx-auto my-4" />

        <form className="flex flex-col text-xl max-w-96 mx-auto" onSubmit={submit}>
          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Username</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="name" type="text" onChange={change} value={createProfile.name}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Age</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="age" type="number" onChange={change} value={createProfile.age}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Email</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="email" type="text" onChange={change} value={createProfile.email}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Password</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="password" type="password" onChange={change} value={createProfile.password}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Confirm password</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="password2" type="password" onChange={change} value={createProfile.password2}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 text-base">I agree with licence agreements</label>
            <input className="m-2 p-1" type="checkbox" name="licence" onChange={change} checked={createProfile.licence}/>
          </div>
          <button className=" p-2 bg-logo-blue text-white rounded-2xl mx-auto my-2 active:bg-dark-logo-blue">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
