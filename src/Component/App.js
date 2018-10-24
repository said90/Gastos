import React, { Component } from 'react';
import '../css/App.css';
import Header from '../Component/Header'
import Form from '../Component/Form'
import List from '../Component/List'
import { validarPresupuesto } from '../helper';
import ControlPresupuesto from './ControlPresupuesto'

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Ingrese el presupuesto inicial');

    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    } else {
      this.obtenerPresupuesto();
    }
  }

  //Agregar un nuevo gasto al state
  agregarGasto = gasto => {
    //Tomar una copia del state actual
    const gastos = {...this.state.gastos};

    //Agregar gasto al objeto State
    gastos[`gasto${Date.now()}`] = gasto;
    //Restar Presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);
    this.setState({
      gastos
    })
  }

  //Resta de presupuesto al agregar un gasto
  restarPresupuesto = cantidad => {
    //Leer el gasto
    let restar = Number(cantidad);

    //Copiar el state
    let restante = Number(this.state.restante);
    //restamos
    restante -= restar;
    //actualizar el state
    this.setState({
      restante
    })
  }



  render() {
    return (
      <div className="App container">
        <Header titulo='Gastos Semanales'

        />

        <div className="contenido-principal contenido">
          <div className="row" >
            <div className="one-half column">
              <Form agregarGasto={this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <List
                gastos={this.state.gastos}
              />

              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}

              />
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;
