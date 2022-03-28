import Nav from "./Nav";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function LostPassword() {

  const [changePassword, setChangePassword]  = useState({name: "", email: ""})

  function change(event){
    setChangePassword(oldVal=>{
      return {
        ...oldVal,
        [event.target.name]: event.target.value
      }
    })
  }
  console.log(changePassword)
  return (
    <>
      <Nav />
  <div className="flex flex-col w-11/12 mx-auto max-w-2xl my-10">
    <Logo class="mx-auto my-4" />

  <form className="flex flex-col text-xl max-w-96 mx-auto">
    <div className="flex flex-wrap justify-between">
      <label className="my-auto mx-2 w-full sm:w-auto">Username</label>
      <input className="m-2 p-1 w-full sm:w-auto border-2"  name="name" type="text" value={changePassword.name} onChange={change}/>
    </div>

    <div className="flex flex-wrap justify-between">
      <label className="my-auto mx-2 w-full sm:w-auto">Email</label>
      <input className="m-2 p-1 w-full sm:w-auto border-2" name="email" type="email" value={changePassword.email} onChange={change}/>
    </div>

  
    <Link to="reset" className="m-auto">
      <button className=" p-2 bg-logo-blue text-white rounded-2xl mx-auto my-2 active:bg-dark-logo-blue">
        Reset password
      </button>
    </Link>

  </form>
</div>
    </>
  );
}
