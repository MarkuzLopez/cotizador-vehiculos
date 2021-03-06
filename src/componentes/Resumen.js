import React, {Component} from 'react'; 
import { primeraMayuscula } from '../helper';
import Resultado from './Resultado';

class Resumen extends Component { 

    mostrarResument = () => { 
    
    
    const {marca, year, plan } = this.props.datos;

        if(!marca || !year || !plan) return null;

        return ( 
            <div className="resumen" >
            <h2>Resumen de cotizacíon</h2>
            <li>Marca: { primeraMayuscula(marca) }</li>
            <li>Plan:  { primeraMayuscula (plan)}</li>
            <li>Año del Auto: {year} </li>
            </div>
        )
    }
 
    render() {         

        return (
           <div>
            {this.mostrarResument()}
            <Resultado 
                resultado = {this.props.resultado}
            />
           </div>
        )
    }
}

export default Resumen;