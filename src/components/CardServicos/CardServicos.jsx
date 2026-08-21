import { FaPaw } from "react-icons/fa";

function CardServico({ nome, descricao, preco, icone }) {
  return (
    <div className={styles.card}>
      
      <div className={icone}>
        {icone || <FaPaw />}
      </div>

      <h3 className={nome}>
        {nome}
      </h3>

      <p className={descricao}>
        {descricao}
      </p>

      <p className={preco}>
        R$ {preco.toFixed(2)}
      </p>

      <button className={styles.botaoAgendar}>
        Agendar serviço
      </button>

    </div>
  );
}

export default CardServico;
