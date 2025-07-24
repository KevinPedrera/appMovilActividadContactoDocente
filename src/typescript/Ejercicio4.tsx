// interface

interface Alumno{
    name: string;
    edad: number;
    calificacion: number;
}

// rafc + tab o enter
export const Ejercicio4 = () => {
    const alumnos: Alumno[] = [
        {
            name: "Viviana",
            edad: 19,
            calificacion:10,
        },
        {
            name: "Wendy",
            edad: 20,
            calificacion:8,
        },
        {
            name: "Gerson",
            edad: 18,
            calificacion:9,
        }
    ]

    // Funcion para el promedio
    const Promedio = (listaAlumnos: Alumno[]): number => {
        const sumaNotas = listaAlumnos.reduce((total, alumno) => total + alumno.calificacion,0);
        return sumaNotas / listaAlumnos.length;
    }
    const promedio= Promedio(alumnos);
  return (
    <div>
        <h3>Promedio de los Alumnos</h3>
        <h4>Lista de Alumnos:</h4>
        <ul>
            
        </ul>

    </div>
  )
}
