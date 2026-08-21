import styles from "./BotaoAgendar.module.css";

function BotaoAgendar({ texto = "Agendar horário" }) {
  return (
    <button className={styles.botao}>
      {texto}
    </button>
  );
}

export default BotaoAgendar;