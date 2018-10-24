import React, { Component } from 'react'
import Gasto from '../Component/Gasto'

export class List extends Component {
    render() {
        return (
            <div className="gastos-realizados">

                <h2>Lista de Gastos</h2>
                {Object.keys(this.props.gastos).map(key => (
                    <Gasto
                    key={key}
                        gasto={this.props.gastos[key]}
                    />

                ))}

                {console.log(this.props.gastos)}

            </div>
        )
    }
}

export default List;
