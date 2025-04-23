import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Input from "./components/Input";
import GithubUser from "./components/GithubUser";
import UserNotFound from "./components/UserNotFound";

function App() {
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState("");

  function handleChange(ev) {
    setUsername(ev.target.value);
  }

  async function handleClick() {
    if (!username) {
      return alert("Digite um usuário!");
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header />
        <Input onChange={handleChange} value={username} onClick={handleClick} />
        {userData.user_view_type && (
          <GithubUser
            avatar={userData.avatar_url}
            name={userData.name}
            bio={userData.bio}
          />
        )}
        {userData.status === "404" && <UserNotFound />}
      </div>
    </div>
  );
}

export default App;
