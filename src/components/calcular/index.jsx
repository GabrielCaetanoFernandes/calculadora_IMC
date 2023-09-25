import styles from './calcular.module.css'

function CalcularIMCButton({ peso, altura, setResultado }) {
    const calcularIMC = () => {
        setResultado(peso / (altura * altura));
    };

    return (
        <div>
            <button className={styles.btn_calcular} type="button" onClick={calcularIMC}>Calcular</button>
        </div>
    );
}

export default CalcularIMCButton;