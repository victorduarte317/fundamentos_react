import './App.css'
import React from 'react'

import Comp from './components/basics/First'
import Parameter from './components/basics/Parameter'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './layout/Card'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentsList from './components/basics/repetition/StudentsList'
import ProductsTable from './components/basics/repetition/ProductsTable'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import UserInfo from './components/conditional/UserInfo'
import DirectParent from './components/communication/DirectParent'


export default () => 
    <div className='App'>
        <h1> React fundamentals </h1>

        <div className='Cards'>

            <Card title='#09 - Direct Communication' color='#eab676' id='table'>
                <DirectParent></DirectParent>
            </Card>

            <Card title='#08 - Conditional Rendering' color='#1c1d32' id='table'>
                <EvenOrOdd number={19}></EvenOrOdd>
                <UserInfo user={{ name: 'André Luiz Teixeira' }}/>  
            </Card>

            <Card title='#07 - Products Table Challenge' color='#241446' id='table'>
                <ProductsTable></ProductsTable>
            </Card>

            <Card title='#06 - Repetition' color="purple">
                <StudentsList></StudentsList>
            </Card>

            <Card title='#05 - Component with children' color="#F00">
                <Family surname='Firebase'>
                    <FamilyMember name='Peter '/>
                    <FamilyMember name='Anna '/>
                    <FamilyMember name='Peter '/>
                </Family>
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
