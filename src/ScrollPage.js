import { useEffect, useState } from "react";
import Contribution from "./Contribution";
import { getFirestore, collection, onSnapshot, addDoc } from "firebase/firestore";
// const date = new Date();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const day = date.getDate();
// const month = date.getMonth() + 1;
// const year = date.getFullYear();
// let date = `${hours}:${minutes < 10 ? "0" + minutes : minutes}.${day} ${month}.${year}`

export default function ScrollPage(props) {
  // {hours}:{minutes < 10 ? "0" + minutes : minutes} {day}.{month}.{year}
  const [contribution, setContribution] = useState({ user: "Ondřej Hájek", date: "11:43.6 4.2022", title: "", text: ""});

  const [messages, setMessages] = useState();
  const db = getFirestore();
  const usersRef = collection(db, "messages");

  function change(event) {
    setContribution((oldVal) => {
      return {
        ...oldVal,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submit(event) {
    event.preventDefault();
    addDoc(usersRef, contribution)
  }




  useEffect(()=>{
    onSnapshot(usersRef, (snapshot) => {
      let mes = [];
      snapshot.docs.forEach((doc) => {
        mes.push({ ...doc.data(), id: doc.id });
      });
      setMessages(mes)
    })
  })



  return (
    <div className=" w-full max-w-scroll-page mx-auto my-5 flex justify-between flex-wrap">
      <div className="wrap:w-side-box p-2 border-4 order-1 w-1/2 h-min">
        <h1 className="font-semibold">You may know...</h1>
        <hr />

        <div className="flex wrap:flex-col flex-row wrap:overflow-y-auto overflow-y-scroll no-scrollbar">
          <div className="flex m-2 wrap:flex-row flex-col">
            <img src={require("./img.png")} alt="" width="60" className="m-auto" />
            <div className="w-full flex flex-col">
              <h1 className="text-center">Ondřej Hájek</h1>
              <div className="px-2 rounded-md bg-logo-blue m-auto text-white font-semibold">Follow</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap:w-main-box w-full flex flex-col order-3 wrap:order-2 m-2 wrap:m-0">
        <form className="flex flex-col w-full" onSubmit={submit}>
          <label className="text-xl font-semibold">Share how do you feel!</label>
          <input type="text" className="bg-logo-blue text-white text-xl font-semibold outline-none p-1 mb-2" placeholder="Title..." onChange={change} value={contribution.title} name="title" />
          <textarea className="w-full resize-none h-28 outline-none bg-logo-blue text-white p-1" placeholder="Content..." onChange={change} value={contribution.content} name="text"></textarea>
          <div className="my-2">
            <button className="bg-logo-blue p-1 rounded-lg text-xl ml-auto">Post!</button>
          </div>
        </form>

        {messages && <div className="flex p-1 flex-col my-1 ">
          <Contribution messages={messages} />
        </div>}
      </div>

      <div className="wrap:w-side-box border-4 p-2 order-2 wrap:order-3 w-1/2 h-min">
        <h1 className="font-semibold">Groups...</h1>
        <hr />

        <div className="flex wrap:flex-col flex-row wrap:overflow-y-auto overflow-y-scroll no-scrollbar">
          <div className="flex m-2 wrap:flex-row flex-col">
            <img src={require("./img.png")} alt="" width="60" className="m-auto" />
            <div className="w-full flex flex-col">
              <h1 className="text-center">Murdria</h1>
              <div className="px-2 rounded-md bg-logo-blue m-auto text-white font-semibold">Follow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
