import { useEffect, useState, useRef } from "react";
import Contribution from "./Contribution";
import { getFirestore, collection, onSnapshot, addDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";

export default function ScrollPage() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let dateStr = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${day}.${month}.${year}`;
  const [contribution, setContribution] = useState({ user: "Ondřej Hájek", title: "", text: "", date: dateStr });
  const [messages, setMessages] = useState();
  const db = getFirestore();
  const mesRef = collection(db, "messages");
  const tempData = useRef();

  function change(event) {
    setContribution((oldVal) => {
      return {
        ...oldVal,
        [event.target.name]: event.target.value,
      };
    });
  }

  function click(event) {
    event.preventDefault();

    const id = event.target.parentElement.firstChild.textContent;
    const docRef = doc(db, "messages", id);
    deleteDoc(docRef);
  }

  useEffect(() => {
    setContribution((oldVal) => {
      return { ...oldVal, date: dateStr };
    });
  }, [dateStr]);

  function submit(event) {
    event.preventDefault();

    addDoc(mesRef, contribution);
    setContribution({ user: "Ondřej Hájek", title: "", text: "", date: dateStr });
  }

  const q = query(mesRef, orderBy("sort", "desc"));
  const fetchData = () => {
    onSnapshot(q, (snapshot) => {
      let mes = [];
      snapshot.docs.forEach((doc) => {
        mes.push({ ...doc.data(), id: doc.id });
      });

      setMessages(mes);
    });
  };
  tempData.current = fetchData;

  useEffect(() => {
    tempData.current();
  }, []);

  let indexes = [0];

  if (messages) {
    messages.forEach((item) => {
      indexes.push(item.sort);
    });
  }

  let high = Math.max(...indexes) + 1;

  useEffect(() => {
    function getIndex() {
      if (messages) {
        setContribution((oldVal) => {
          return {
            ...oldVal,
            sort: high,
          };
        });
      }
    }
    getIndex();
  }, [high, messages]);

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
          <textarea className="w-full resize-none h-28 outline-none bg-logo-blue text-white p-1" placeholder="Content..." onChange={change} value={contribution.text} name="text"></textarea>
          <div className="my-2">
            <button className="bg-logo-blue p-1 rounded-lg text-xl ml-auto">Post!</button>
          </div>
        </form>

        {messages && (
          <div className="flex p-1 flex-col my-1">
            <Contribution messages={messages} click={click} />
          </div>
        )}
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
