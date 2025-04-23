import styles from "./GithubUser.module.css";

const GithubUser = ({ avatar, name, bio }) => {
  return (
    <div className={styles.userContainer}>
      <img src={avatar} alt="Imagem escolhida pelo usuário" />
      <div className={styles.userInfo}>
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default GithubUser;
