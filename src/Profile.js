import { useState } from "react";
export default function Profile(props) {
  const [photo, setPhoto] = useState();
  return (
    <div className="flex max-w-5xl mx-auto my-4 ">
      <div className="relative group">
        <p className="absolute bottom-1 right-1 p-1 rounded-2xl bg-slate-100 opacity-90 group-hover:block hidden">change profile photo</p>
        <img src={require("./img.png")} alt="" width="200" />
      </div>
      <h1 className="m-auto text-5xl font-semibold">{props.user.name}</h1>
    </div>
  );
}
