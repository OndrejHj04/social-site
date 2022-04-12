import { data } from "autoprefixer";
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
      let object = {};

      repos.map((commit) => {
        const patch = commit.commit.message.replace("[", "").replace("]", "");
        const date = commit.commit.committer.date.substring(5, 10).replace("-", ". ") + ".";

        if(!patch.includes(".") && patch.includes("Patch")){
          object[patch.replace("Patch", "")] = {name: patch, date: date, children: []}
        }else if(patch.includes("Patch")){
          let string = Number(patch.substring(0, patch.indexOf(".")).replace("Patch", ""))+1
            
          if(object[string]) 
          object[string].children.push({name: patch, date: date})
        }
      });

      console.log(object)
    }
  }

  return (
    <div className="">
      <div className="max-w-5xl m-auto">{getCommits()}</div>
    </div>
  );
}
