import styles from './altura.module.css'

function AlturaInput({ altura, setAltura }) {
    return (
        <>
        <label for="altura" className={styles.lbl_input}>Altura:</label>
            <input className={styles.input} onChange={(e) => setAltura(e.target.value)} type="number" value={altura} name="altura" />
        </>
    );
}
export default AlturaInput;