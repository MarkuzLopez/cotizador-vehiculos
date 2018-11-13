import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';
import Resumen from "./Resumen";
import Resultado from "./Resultado";

class App extends Component {

  /// state 
   state = { 
     resultado: '',
     datos: { 

     }
   }

   cotizarSeguro = (datos) => {
      const { marca, plan, year } =  datos;
      
      /// Agregar una base de 2000
      let resultado =  2000;


      //Obtener la diferencia de añós 
       const diferencia =  obtenerDiferenciaAnio(year);
       
       

      //Por cada año restar el 3% y al valor del seguro
      resultado -= ((diferencia *  3) * resultado ) / 100;
      
      

      // Amerciano 15 % Asiatico 5% y europeo 30% de incremento al valor actual
       resultado = calcularMarca(marca) *  resultado;
       
       
    /// el plan basico incrementa el valor 20 % y 
    /// cobertura completa 50 % 
      let incrementarPlan =  obtenerPlan(plan);        
       
    
    // dependiendo del plan incrementar  (redondear)
        resultado = parseFloat(  incrementarPlan * resultado).toFixed(2);
        console.log(resultado);
        
    // crear el objeto para el resumen
    const datosAuto = { 
      marca: marca,
      plan: plan,
      year:  year
    }

    // ya tenemos el costo.
    this.setState({ 
      resultado :  resultado,
      datos: datosAuto
    })

   }

  render() {
    return (
      <div className="contenedor">
        <Header 
           titulo="Cotizador de Autos! " 
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen 
             datos = {this.state.datos}
            resultado =  {this.state.resultado}
          />                    
        </div>
      </div>
    );
  }
}

export default App;
