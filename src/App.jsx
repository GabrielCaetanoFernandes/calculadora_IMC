import { useState } from 'react';
import PesoInput from './components/peso';
import AlturaInput from './components/altura';
import CalcularIMCButton from './components/calcular';
import ResultadoIMC from './components/resultado';
import ShowTable from './components/tabela';

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);


  return (
    <>
      <header>
        <h1>Calculadora de IMC</h1>
      </header>
      <div className="container">
        <div className="calculadora">
          <form>
            <PesoInput peso={peso} setPeso={setPeso} />
            <AlturaInput altura={altura} setAltura={setAltura} />
            <CalcularIMCButton peso={peso} altura={altura} setResultado={setResultado} />
            <ResultadoIMC resultado={resultado} />
          </form>
            <ShowTable resultado={resultado}/>
        </div>
      </div>
    </>
  );
}

export default App
