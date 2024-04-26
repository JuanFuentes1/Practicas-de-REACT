import React from "react"
import Table from "react-bootstrap/Table"
import Proptypes from "prop-types"


const Tablee = ({brand, income}) => {
    return (
        <>
            <tr>
                <td>{brand}</td>
                <td>{income}</td>
            </tr>
        </>
    )
}

export default Tablee

Tablee.Proptypes = {
    brand: Proptypes.string,
    income: Proptypes.number
}