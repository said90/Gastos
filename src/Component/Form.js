import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Form extends Component {

    nombreGasto = React.createRef();
    cantidadGasto= React.createRef();


    crearGasto = (e) =>{
            e.preventDefault();
            const gasto ={
                nombreGasto: this.nombreGasto.current.value,
                cantidadGasto: this.cantidadGasto.current.value
            }
//            console.log(gasto);

            this.props.agregarGasto(gasto);

            e.currentTarget.reset();

    }

    render() {
        return (
            <form onSubmit= {this.crearGasto}> 
                <h2>Agrega tus gastos aqui</h2>
                <div className='campo'>
                    <label>Nombre del gasto: </label>
                    <input className='u-full-width' ref={this.nombreGasto} type='text' placeholder="Ej. Transporte" />
                </div>

                <div className='campo'>
                    <label>Cantidad: </label>
                    <input className='u-full-width' ref={this.cantidadGasto} type='text' placeholder="Ej. 400" />
                </div>
                <input className='button-primary u-full-width' type='submit'  />
            </form>
        )
    }
}

Form.PropTypes ={
    agregarGasto: PropTypes.func.isRequired
}

export default Form;
