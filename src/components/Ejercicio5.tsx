import { useCounter } from "../hooks/useCounter"

// rafc + tab o enter
export const Ejercicio5 = () => {
    const {contador, gestionarContador} = useCounter();

  return (
    <div>
        <h3>Ejercicio 5 Contador de 5 en 5</h3>
        <br />
        <h4>Valor Actual: <small>{contador}</small></h4>
        <button className="btn btn-primary" onClick={() => gestionarContador(5)}>+5</button>
        &nbsp;
        <button className="btn btn-primary" onClick={() => gestionarContador(-5)}>-5</button>
    </div>
  )
}
