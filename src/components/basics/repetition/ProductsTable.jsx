// listing the products

import React from 'react'
import products from '../../../data/products'

export default props => {
    const productsList = products.map((product)=>{
        return (
            <tr key={product.id}>
                <td> {product.id}) </td> <td> {product.name} </td> <td> {product.price} </td>
            </tr>
        )
    })

    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Price</th>
            </tr>

            { productsList }
        </table>
        
    )
}