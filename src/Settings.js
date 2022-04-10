import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function Settings() {
  const [gitHub, setGitHub] = useState();
  const [repos, getRepos] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/OndrejHj04")
      .then((res) => res.json())
      .then((data) => setGitHub(data));
    fetch("https://api.github.com/repos/OndrejHj04/social-site/commits?per_page=100")
      .then((res) => res.json())
      .then((data) => getRepos(data));
  }, []);

  function getCommits() {
    if (repos) {
      return repos.map((commit) => {
        return (
          <div key={nanoid()}>
            <p>{commit.commit.committer.date}</p>
            <p>{commit.commit.message}</p>
            <br />
          </div>
        );
      });
    }
  }

  return (
    <>
      {gitHub && <img src={gitHub.avatar_url} alt="" />}
      <div>{getCommits()}</div>
    </>
  );
}
