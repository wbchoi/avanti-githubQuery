import styles from "./UserNotFound.module.css";

const UserNotFound = () => {
  return (
    <div className={styles.notFound}>
      <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
      <p>Tente novamente com um usuário válido.</p>
    </div>
  );
};

export default UserNotFound;
