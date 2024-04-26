import React from 'react'
import Tablee from "./Tablee"
import Table from "react-bootstrap/Table"


function App() {

  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const incomes = netIncomes.map((inc) => (inc.income))
  const averageIncomes = incomes.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return (
    <div className='container'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ing. brutos</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index)=>(
            <Tablee 
            key={index}
            brand={item.brand}
            income={item.income}
            />
        ))}
        </tbody>
      </Table>
      <p>El promedio de ingresos brutos es de {(averageIncomes / incomes.length).toFixed(2)}</p>
    </div>
  )
}

export default App
