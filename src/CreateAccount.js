import Nav from "./Nav";
import Logo from "./Logo";
export default function CreateAccount() {
  return (
    <>
      <div className="flex flex-col w-11/12 mx-auto border-4 bg-red-400 max-w-4xl">
      <Logo class="mx-auto"/>
    
        <form className="flex flex-col ">
          <label>Name</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <label>Age</label>
          <input type="number" />

          <label>Password</label>
          <input type="password" />

          <label>Password</label>
          <input type="password" />

          <label>I agree with terms of usage</label>
          <input type="checkbox" />
        </form>
      </div>
      <Nav />
    </>
  );
}
