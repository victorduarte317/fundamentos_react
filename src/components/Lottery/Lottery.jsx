import React , { Component }from 'react'
import Input from './Input'
import numberGenerator from './numberGenerator'

class Lottery extends Component {
    render() {
        return (
            <div>
                <h2> Lottery </h2>
                <Input />

            </div>
        )
    }
}

export default Lottery
// serie de numeros gerados, input pra quantos numeros quer gerar, botao pra gerar o array