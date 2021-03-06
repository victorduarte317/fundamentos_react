import './App.css'
import React from 'react'

import Comp from './components/basics/First'
import Parameter from './components/basics/Parameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './layout/Card'
import Family from './components/basics/Family'


export default _ => 
    <div className='App'>
        <h1> React fundamentals </h1>

        <div className='Flexbox'>

            <Card title='#05 - Component with children' color="#F00">
                <Family surname='Smith'/>
            </Card>

            <Card title='#04 - Random Number Challenge' color="#FA6900">
                <Random min={1} max={10}/> 
            </Card>

            <Card title='#03 - Fragment' color="#F3B630">
                <Fragment />
            </Card>

            <Card title='#02 - Parameter' color="#69D2E6">
                <Parameter 
                    title='Grades' 
                    student='Peter'
                    grade={9.7}
                />
            </Card>

            <Card title='#01 - First Component' color="#A7DBDB">
                <Comp></Comp>   
            </Card>
        </div>      
    </div>
