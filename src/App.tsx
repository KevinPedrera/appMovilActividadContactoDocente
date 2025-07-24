//el app es el componente padre
//Componente React ---- ts + React --> tsx

import { Ejercicio1 } from "./typescript/Ejercicio1";
import { Ejercicio2 } from "./typescript/Ejercicio2";

// exportacion directa
const App = () => {
  return (
    <div className="mt-2">
      <h1>Actividad Contato Docente 1 Kevin Pedrera</h1>
      <br />
      <Ejercicio1/>
      <Ejercicio2/>
    </div>
  )
}

export default App;