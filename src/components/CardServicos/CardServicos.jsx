import { FaPaw } from "react-icons/fa";
import styles from "./CardServicos.module.css";

function CardServico({ nome, descricao, preco, icone }) {
  return (
    <div className={styles.card}>
      <div className={styles.icone}>
        {icone || <FaPaw />}
      </div>

      <h3 className={styles.nome}>
        {nome}
      </h3>

      <p className={styles.descricao}>
        {descricao}
      </p>

      <p className={styles.preco}>
        R$ {preco.toFixed(2)}
      </p>

      <button className={styles.botaoAgendar}>
        Agendar serviço
      </button>
    </div>
  );
}

export default CardServico;
