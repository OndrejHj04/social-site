import Nav from "./Nav";
import Logo from "./Logo";
import { Link } from "react-router-dom";
export default function LostPassword() {
  return (
    <>
      <Nav />

<div className="flex flex-col w-11/12 mx-auto max-w-2xl my-10">
  <Logo class="mx-auto my-4" />

  <form className="flex flex-col text-xl max-w-96 mx-auto">
    <div className="flex flex-wrap justify-between">
      <label className="my-auto mx-2 w-full sm:w-auto">Username</label>
      <input className="m-2 p-1 w-full sm:w-auto border-2" type="text" />
    </div>

    <div className="flex flex-wrap justify-between">
      <label className="my-auto mx-2 w-full sm:w-auto">Email</label>
      <input className="m-2 p-1 w-full sm:w-auto border-2" type="email" />
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
