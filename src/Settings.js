import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function Settings() {
  const [repos, getRepos] = useState();

  useEffect(() => {
    fetch("https://api.github.com/repos/OndrejHj04/social-site/commits?per_page=100")
      .then((res) => res.json())
      .then((data) => getRepos(data));
  }, []);

  function click(e) {
    let target = e.target.parentElement.parentElement.lastChild;
    let arrow = e.target

    if (target.classList.value === "block") {
      target.classList.remove("block");
      target.classList.add("hidden");

      arrow.classList.value = ""

    } else if (target.classList.value === "hidden") {
      target.classList.remove("hidden");
      target.classList.add("block");

      arrow.classList.value = ""
      arrow.classList.add("rotate-90")
    }
  }

  function getCommits() {
    if (repos) {
      let object = {};

      repos.map((commit) => {
        const patch = commit.commit.message.replace("[", "").replace("]", "");
        const date = commit.commit.committer.date.substring(5, 10).replace("-", ". ") + ".";

        if (!patch.includes(".") && patch.includes("Patch")) {
          object[patch.replace("Patch", "")] = { name: patch, date: date, children: [] };
        } else if (patch.includes("Patch")) {
          let string = Number(patch.substring(0, patch.indexOf(".")).replace("Patch", "")) + 1;

          if (object[string]) object[string].children.push({ name: patch, date: date });
        }
        return commit
      });

      object = Object.values(object).reverse();

      return object.map((item) => {
        const versions = item.children.map((child) => {
          return (
            <div key={nanoid()} className="flex justify-between w-40 ml-5">
              <h1>{child.name}</h1>
              <p>{child.date}</p>
            </div>
          );
        });
        return (
          <div key={nanoid()}>
            <div className="bg-slate-300 border-2 border-black flex justify-between p-1">
              <div className="w-60 flex justify-between">
                <h1 className="text-lg font-semibold">{item.name.substring(0,5)} {item.name.substring(5)}</h1>
                <p>{item.date}</p>
              </div>
              <img src={require("./arrow.png")} alt="" width="40" onClick={click} />
            </div>
            {versions && <div className="hidden">{versions}</div>}
          </div>
        );
      });
    }
  }

  return (
    <div className="m-1">
      <div className="max-w-5xl m-auto">{getCommits()}</div>
    </div>
  );
}
