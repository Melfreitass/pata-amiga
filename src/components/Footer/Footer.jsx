import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Logo e descrição */}
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <img
                            src="/src/assets/logo.png"
                            alt="Logo PataAmiga"
                        />

                        <span>PataAmiga</span>
                    </div>

                    <p>
                        Clínica veterinária e petshop de bairro,
                        <br />
                        cuidando de pets com carinho desde
                        <br />
                        2013.
                    </p>
                </div>

                {/* Navegação */}
                <div className={styles.column}>
                    <h3>Navegação</h3>

                    <a href="#home">Home</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </div>

                {/* Serviços */}
                <div className={styles.column}>
                    <h3>Serviços</h3>

                    <a href="#servicos">Banho e Tosa</a>
                    <a href="#consultas">Consultas</a>
                    <a href="#hospedagem">Hospedagem</a>
                </div>

                {/* Contato */}
                <div className={styles.column}>
                    <h3>Contato</h3>

                    <span>Rua das Flores, 245</span>
                    <span>(11) 3456-7890</span>
                    <span>contato@pataamiga.com.br</span>
                </div>

            </div>

            {/* Rodapé inferior */}
            <div className={styles.bottom}>
                <span>
                    © 2026 PataAmiga. Todos os direitos reservados.
                </span>

                <span>
                    Feito com carinho para pets e tutores.
                </span>
            </div>
        </footer>
    );
}