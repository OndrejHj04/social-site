import Logo from "./Logo";
import { useState } from "react";
export default function ResetPassword() {

  const [reset, setReset] = useState({code: "", password: "", password2: ""})

  function  change(event){
    setReset(oldVal=>{
      return {
        ...oldVal,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <>
      <div className="flex flex-col w-11/12 mx-auto max-w-2xl my-10">
    <Logo class="mx-auto my-4" />

  <form className="flex flex-col text-xl max-w-96 mx-auto">
    <div className="flex flex-wrap justify-between">
      <label className="my-auto mx-2 w-full sm:w-auto">Code</label>
      <input className="m-2 p-1 w-full sm:w-auto border-2"  name="name" type="text" onChange={change} value={reset.code}/>
    </div>

    <div className="flex flex-wrap justify-between">
      <label className="my-auto mx-2 w-full sm:w-auto">New password</label>
      <input className="m-2 p-1 w-full sm:w-auto border-2" name="password" type="password" onChange={change} value={reset.password}/>
    </div>

    <div className="flex flex-wrap justify-between">
      <label className="my-auto mx-2 w-full sm:w-auto">New password again</label>
      <input className="m-2 p-1 w-full sm:w-auto border-2" name="password2" type="password" onChange={change} value={reset.password2}/>
    </div>

  
      <button className=" p-2 bg-logo-blue text-white rounded-2xl mx-auto my-2 active:bg-dark-logo-blue">
        Reset password
      </button>


  </form>
</div>
    </>
  );
}
