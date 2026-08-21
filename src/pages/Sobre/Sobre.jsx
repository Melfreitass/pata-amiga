import {
  FaPaw,
  FaHeart,
  FaShieldAlt,
  FaHandsHelping,
  FaUserMd,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.tag}>
          <FaPaw />
          <span>NOSSA HISTÓRIA</span>
        </div>

        <h1>
          Cuidando de pets como se fossem
          <br />
          da nossa própria família
        </h1>

        <p>
          A PataAmiga nasceu em 2013 do sonho de uma veterinária apaixonada
          por animais: oferecer um atendimento próximo, humano e de
          confiança para tutores e seus pets.
        </p>
      </section>

      {/* VALORES */}
      <section className={styles.values}>
        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>
            <FaHeart />
          </div>
          <h3>Cuidado de verdade</h3>
          <p>Cada pet é tratado com atenção individual, nunca em série.</p>
        </div>

        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>
            <FaShieldAlt />
          </div>
          <h3>Confiança</h3>
          <p>Procedimentos claros e comunicação honesta com o tutor.</p>
        </div>

        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>
            <FaHandsHelping />
          </div>
          <h3>Compromisso</h3>
          <p>Acompanhamos a saúde do seu pet a longo prazo, não só na consulta.</p>
        </div>
      </section>

      {/* EQUIPE */}
      <section className={styles.team}>
        <h2>Quem cuida do seu pet</h2>
        <p className={styles.teamLead}>
          Uma equipe pequena, de confiança, que conhece cada pet pelo nome.
        </p>

        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <FaUserMd />
            </div>
            <h4>Dra. Marina Alves</h4>
            <span>Veterinária Chefe</span>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <FaUserMd />
            </div>
            <h4>Dr. Rafael Sousa</h4>
            <span>Clínico Geral</span>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <FaPaw />
            </div>
            <h4>Bianca Lima</h4>
            <span>Banho e Tosa</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Vamos cuidar do seu pet?</h2>
        <p>Agende um horário e conheça de perto o nosso jeito de cuidar.</p>
        <NavLink to="/agendamento" className={styles.ctaButton}>
          Agendar horário
        </NavLink>
      </section>

    </main>
  );
}