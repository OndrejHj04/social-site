import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function Settings() {
  const [repos, getRepos] = useState();

  useEffect(() => {
    fetch("https://api.github.com/repos/OndrejHj04/social-site/commits?per_page=100")
      .then((res) => res.json())
      .then((data) => getRepos(data));
  }, []);

  function getCommits() {
    if (repos) {
      return repos.map((commit) => {
        const patch = commit.commit.message.replace();
        const date = commit.commit.committer.date.replace(/[A-Z]/g, " ").replace(/-/g, " ");

        if(!patch.includes(".") && patch.includes("Patch")){
          return (
            <div key={nanoid()} className="bg-stone-400 p-1 group m-1 flex">
              <p className="font-bold">{patch}</p>
              <p className="ml-auto">{date}</p>
              <br />
            </div>
          );
        }else{
          return (
            <div key={nanoid()} >
              <p className=" ">{patch}</p>
              <p>{date}</p>
              <br />
            </div>
          );
        }

      });
    }
  }

  return (
    <div className="">
      <div className="max-w-5xl m-auto">{getCommits()}</div>
    </div>
  );
}
