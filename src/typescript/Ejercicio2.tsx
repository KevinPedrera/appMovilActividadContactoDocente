// rafc + tab o enter
export const Ejercicio2 = () => {
    const sumaArreglo = (numeros: number[]): number => {
        return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    }

    const arregloNumeros =[1,2,3,4,5,6,7,8,9,10];

  return (
    <div>
        <h3>Suma de Elementos de un Arreglo</h3>
        <p>El arreglo es: [{arregloNumeros.join(", ")}]</p>
        <p>La suma de los elementos del arreglo es: {sumaArreglo(arregloNumeros)}</p>
    </div>
  )
}