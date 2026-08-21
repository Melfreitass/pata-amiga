import styles from "./BotaoAgendar.module.css";

function BotaoAgendar({ texto = "Agendar horário", onClick, type = "button" }) {
  return (
    <button type={type} className={styles.botao} onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotaoAgendar;