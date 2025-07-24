// rafc + tab o enter
import { useState } from "react"

export const useCounter = () => {
    const [contador, setContador] = useState<number>(0);
    const gestionarContador = (numero: number): void =>{
        setContador(contador + numero);
    }
  return {
    contador,
    gestionarContador
  }
}
