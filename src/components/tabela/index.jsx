import styles from './tabela.module.css'

function ShowTable({ resultado }) {
    const getHighlight = (imcValue, minRange, maxRange) => {
        if (imcValue >= minRange && imcValue <= maxRange) {
            return styles.highlight;
        }
        return '';
    };


    return (
        <>
            <table className={styles.table_b}>
                <tbody>
                    <tr>
                        <th className={styles.table_i}>IMC</th>
                        <th className={styles.table_i}>Classificação</th>
                    </tr>
                    <tr className={getHighlight(resultado, 0.1, 18.4)}>
                        <td className={styles.table_i}>Menor que 18,5</td>
                        <td className={styles.table_i}>Baixo peso</td>
                    </tr>
                    <tr className={getHighlight(resultado, 18.5, 24.9)}> 
                        <td className={styles.table_i}>De 18,5 a 24,9</td>
                        <td className={styles.table_i}>Peso normal</td>
                    </tr>
                    <tr className={getHighlight(resultado, 25, 29.9)}>
                        <td className={styles.table_i}>De 25 a 29,9</td>
                        <td className={styles.table_i}>Sobrepeso</td>
                    </tr>
                    <tr className={getHighlight(resultado, 30, 34.9)}>
                        <td className={styles.table_i}>De 30 a 34,9</td>
                        <td className={styles.table_i}>Obesidade grau I</td>
                    </tr>
                    <tr className={getHighlight(resultado, 35, 39.9)}>
                        <td className={styles.table_i}>De 35 a 39.9</td>
                        <td className={styles.table_i}>Obesidade grau II</td>
                    </tr>
                    <tr className={getHighlight(resultado, 40, 200)}>
                        <td className={styles.table_i}>a partir de 40</td>
                        <td className={styles.table_i}>Obesidade grau III</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ShowTable;