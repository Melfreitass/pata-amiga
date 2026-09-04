import styles from "./Home.module.css";

import logo from "../../assets/logo.png";

import { FaPaw, FaStar, FaSyringe, FaCut } from "react-icons/fa";

import BotaoAgendar from "../../components/BotaoAgendar/BotaoAgendar";
import CardServico from "../../components/CardServicos/CardServicos";
import Formulario from "../../components/Formulario/Formulario";

import servicos from "../../data/servicos";

function Home() {
  const irParaFormulario = () => {
    document
      .getElementById("agendamento")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>

            <div className={styles.heroContent}>

              <div className={styles.tag}>
                <FaPaw />
                <span>CUIDADO VETERINÁRIO & ESTÉTICA</span>
              </div>

              <h1>
                Seu pet merece um
                <br />
                cuidado <span>de verdade.</span>
              </h1>

              <p>
                Banho, tosa, consultas e hospedagem com uma equipe que
                trata cada bichinho como se fosse da família. Agende em
                poucos minutos.
              </p>

              <div className={styles.buttons}>
                <BotaoAgendar onClick={irParaFormulario} />

                <button className={styles.secondaryButton}>
                  Ver serviços
                </button>
              </div>

              <div className={styles.stats}>

                <div className={styles.stat}>
                  <strong>12 anos</strong>
                  <span>de experiência</span>
                </div>

                <div className={styles.stat}>
                  <strong>3.400+</strong>
                  <span>pets atendidos</span>
                </div>

                <div className={styles.stat}>
                  <strong>
                    4.9 <FaStar />
                  </strong>
                  <span>avaliação média</span>
                </div>

              </div>
            </div>

            <div className={styles.heroVisual}>

              <div className={styles.circle}></div>

              <div className={styles.logoContainer}>
                <img
                  src={logo}
                  alt="Logo da empresa"
                  className={styles.logo}
                />
              </div>

              <div
                className={`${styles.floatingTag} ${styles.vaccine}`}
              >
                <FaSyringe />
                <span>Vacina em dia</span>
              </div>

              <div
                className={`${styles.floatingTag} ${styles.grooming}`}
              >
                <FaCut />
                <span>Tosa higiênica</span>
              </div>

            </div>

          </div>
        </section>

        <section className={styles.services}>

          <div className={styles.sectionHeader}>

            <div className={styles.tag}>
              NOSSOS SERVIÇOS
            </div>

            <h2>
              Tudo que seu pet precisa, em um só
              <br />
              <span>lugar.</span>
            </h2>

            <p>
              Cuidado completo para deixar seu melhor amigo saudável,
              feliz e bem cuidado.
            </p>

          </div>


          <div className={styles.servicesGrid}>
    {servicos.map((servico) => (
        <CardServico
            key={servico.id}
            nome={servico.nome}
            descricao={servico.descricao}
            preco={servico.preco}
            onAgendar={irParaFormulario}
        />
    ))}
</div>

        </section>


        <section className={styles.cta}>

          <div className={styles.ctaContent}>

            <div>

              <span className={styles.ctaTag}>
                SEU PET MERECE O MELHOR
              </span>

              <h2>
                Pronto para cuidar do seu
                <br />
                melhor amigo?
              </h2>

              <p>
                Agende agora mesmo e proporcione todo o cuidado que seu
                pet merece.
              </p>

            </div>

            <BotaoAgendar onClick={irParaFormulario} />

          </div>

        </section>

        <Formulario />

      </main>
    </>
  );
}

export default Home;