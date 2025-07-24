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
    }
  return (
    <div>Ejercicio4</div>
  )
}
