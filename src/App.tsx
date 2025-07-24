//el app es el componente padre
//Componente React ---- ts + React --> tsx

import { Ejercicio5 } from "./components/Ejercicio5";
import { Ejercicio1 } from "./typescript/Ejercicio1";
import { Ejercicio2 } from "./typescript/Ejercicio2";
import { Ejercicio3 } from "./typescript/Ejercicio3";
import { Ejercicio4 } from "./typescript/Ejercicio4";

// exportacion directa
const App = () => {
  return (
    <div className="mt-2">
      <h1>Actividad Contato Docente 1 Kevin Pedrera</h1>
      <br />
      <Ejercicio1/>
      <div style={{margin: '20px 0', borderBottom: '3px solid #e2bd36ff'}}></div>
      <Ejercicio2/>
      <div style={{margin: '20px 0', borderBottom: '3px solid #e2bd36ff'}}></div>
      <Ejercicio3/>
      <div style={{margin: '20px 0', borderBottom: '3px solid #e2bd36ff'}}></div>
      <Ejercicio4/>
      <div style={{margin: '20px 0', borderBottom: '3px solid #e2bd36ff'}}></div>
      <Ejercicio5/>
      <div style={{margin: '20px 0', borderBottom: '3px solid #e2bd36ff'}}></div>
      <br />
    </div>
  )
}

export default App;