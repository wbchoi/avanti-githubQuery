import styles from "./Input.module.css";
import searchIcon from "../assets/icon-search.svg";

const Input = ({ onChange, value, onClick }) => {
  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        onChange={onChange}
        value={value}
      />
      <button onClick={onClick}>
        <img src={searchIcon} alt="Buscar usuário" />
      </button>
    </div>
  );
};

export default Input;
