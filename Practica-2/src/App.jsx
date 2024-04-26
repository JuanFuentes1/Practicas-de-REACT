import React from 'react'
import Tablee from "./Tablee"

export const netIncomes = [
  {id: 1, brand: "McDonalds", income: 1291283}, 
  {id: 2, brand: "Burger King", income: 1927361}, 
  {id: 3, brand: "KFC", income: 1098463}
];

function App() {

  const incomes = netIncomes.map((inc)=>(inc.income))
  const averageIncomes = incomes.reduce((accumulator, currentValue)=>accumulator+currentValue, 0)

  return (
    <div className='container'>
      <Tablee/>
      <p>El promedio de ingresos brutos es de {averageIncomes/incomes.length}</p>
    </div>
  )
}

export default App
