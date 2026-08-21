import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaw,
} from "react-icons/fa";
import styles from "./Contato.module.css";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensagem de contato:", form);
    setEnviado(true);
  };

  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.tag}>
          <FaPaw />
          <span>FALE COM A GENTE</span>
        </div>

        <h1>Estamos por perto para ajudar você e seu pet</h1>
        <p>
          Dúvidas, sugestões ou algum imprevisto com o agendamento? Manda
          uma mensagem que a gente responde rapidinho.
        </p>
      </section>

      <section className={styles.content}>

        {/* INFORMAÇÕES */}
        <div className={styles.info}>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>Endereço</h4>
              <p>Rua das Flores, 245 — Jardim Primavera</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaPhone />
            </div>
            <div>
              <h4>Telefone</h4>
              <p>(11) 3456-7890</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaEnvelope />
            </div>
            <div>
              <h4>E-mail</h4>
              <p>contato@pataamiga.com.br</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaClock />
            </div>
            <div>
              <h4>Horário de funcionamento</h4>
              <p>Seg a Sáb, 08h às 18h</p>
            </div>
          </div>

        </div>

        {/* FORMULÁRIO DE CONTATO */}
        <div className={styles.formCard}>
          <h2>Envie uma mensagem</h2>

          {enviado ? (
            <div className={styles.success}>
              <FaPaw />
              <p>Mensagem enviada! Retornamos em breve. 🐾</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className={styles.field}>
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Enviar mensagem
              </button>

            </form>
          )}
        </div>

      </section>

    </main>
  );
}