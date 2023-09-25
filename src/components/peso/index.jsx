import styles from './peso.module.css'

function PesoInput({ peso, setPeso }) {
    return (
        <>
            <label className={styles.lbl_input} for="peso">Peso:</label>
            <input className={styles.input} onChange={(e) => setPeso(e.target.value)} type="number" value={peso} name="peso" />
        </>
    );
}

export default PesoInput;