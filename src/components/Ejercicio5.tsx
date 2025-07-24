import { useCounter } from "../hooks/useCounter"

// rafc + tab o enter
export const Ejercicio5 = () => {
    const {contador, gestionarContador} = useCounter();

  return (
    <div>
        <h3>Contador de 5 en 5</h3>
        <p>Valor Actual: <small>{contador}</small></p>
        <button className="btn btn-primary" onClick={() => gestionarContador(5)}>+5</button>
        &nbsp;
        <button className="btn btn-primary" onClick={() => gestionarContador(-5)}>-5</button>
    </div>
  )
}
