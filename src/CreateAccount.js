import Nav from "./Nav";
import Logo from "./Logo";
import { useState } from "react";
export default function CreateAccount() {

  const [createProfile, setCreateProfile] = useState({name: "", age: null, email: "", password: "", password2: "", linence: false})

  function change(event){
    setCreateProfile(oldVal=>{
      return {
        ...oldVal,
        [event.target.name]: event.target.name=="licence" ? event.target.checked : event.target.value
      }
    })
  }

  return (
    <>
      <Nav />

      <div className="flex flex-col w-11/12 mx-auto max-w-2xl my-10">
        <Logo class="mx-auto my-4" />

        <form className="flex flex-col text-xl max-w-96 mx-auto">
          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Username</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="name" type="text" onChange={change}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Age</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="age" type="number" onChange={change}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Email</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="email" type="text" onChange={change}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Password</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="password" type="password" onChange={change}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 w-full sm:w-auto">Confirm password</label>
            <input className="m-2 p-1 w-full sm:w-auto border-2" name="password2" type="password" onChange={change}/>
          </div>

          <div className="flex flex-wrap justify-between">
            <label className="my-auto mx-2 text-base">I agree with licence agreements</label>
            <input className="m-2 p-1" type="checkbox" name="blig" onChange={change}/>
          </div>
          <button className=" p-2 bg-logo-blue text-white rounded-2xl mx-auto my-2 active:bg-dark-logo-blue">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
