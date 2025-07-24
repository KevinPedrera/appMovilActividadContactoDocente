// rafc + tab o enter
export const Ejercicio3 = () => {

    const arrOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const dividir = (arr: number[], divisor: number): number[] => {
        return arr.map(numero => numero / divisor);
    }

    const arrDividido = dividir(arrOriginal, 5);

    return (
        <div>
            <h3>Division de Elementos de un Arreglo Usando Map</h3>
            <p>Arreglo Original: [{arrOriginal.join(", ")}]</p>
            <p>Arreglo Dividido para 5: [{arrDividido.join(", ")}]</p>
        </div>
    );
}