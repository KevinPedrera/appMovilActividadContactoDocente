// rafc + tab o enter
export const Ejercicio1 = () => {
    
    const calcularAreaCuadrado = (lado: number): number => {
        return lado * lado;
    }

    const ladoDelCuadrado = 5; 
    return (
        <div>
            <h3>Cálculo del Área de un Cuadrado</h3>
            <p>El lado del cuadrado es: {ladoDelCuadrado}</p>
            <p>El área del cuadrado es: {calcularAreaCuadrado(ladoDelCuadrado)}</p>
        </div>
    );
}