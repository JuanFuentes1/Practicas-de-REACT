import React from "react"
import { netIncomes } from "./App"
import Table from "react-bootstrap/Table"

const Tablee = () => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ing. brutos</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((company) => (
                        <tr key={company.id}>
                            <td>{company.brand}</td>
                            <td>{company.income}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}


export default Tablee