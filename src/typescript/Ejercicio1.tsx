// rafc + tab o enter
export const Ejercicio1 = () => {
    
    const calcularArea = (lado: number): number => {
        return lado * lado;
    }
    const lado = 5; 
    
    return (
        <div>
            <h3><em>Ejercicio 1 Cálculo del Área de un Cuadrado</em></h3>
            <br />
            <p>Los lados del cuadrado son de: {lado}</p>
            <p>El área del cuadrado es: {calcularArea(lado)}</p>
        </div>
    );
}