import logo from "../assets/github-logo.svg";
import githubLogo from "../assets/github.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do Github" />
      <div className={styles.flex}>
        <h1 className={styles.title}>Perfil</h1>
        <img src={githubLogo} />
      </div>
    </header>
  );
};

export default Header;
