// rafc + tab o enter
export const Ejercicio1 = () => {
    
    const calcularArea = (lado: number): number => {
        return lado * lado;
    }
    const lado = 5; 
    
    return (
        <div>
            <h3>Cálculo del Área de un Cuadrado</h3>
            <p>El lado del cuadrado es: {lado}</p>
            <p>El área del cuadrado es: {calcularArea(lado)}</p>
        </div>
    );
}