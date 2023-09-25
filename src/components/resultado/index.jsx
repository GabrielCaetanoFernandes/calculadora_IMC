import styles from './resultado.module.css'

function ResultadoIMC({ resultado }) {
    return (
        <div>
            <p className={styles.resultado_txt}>Seu IMC é: {resultado.toFixed(2)}</p>
        </div>
    );
}
export default ResultadoIMC;