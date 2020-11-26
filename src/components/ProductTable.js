import React from 'react';
import ProductRow from './ProductRow.js';


class ProductTable extends React.Component {
    
    
    render () {
        return (
            <div>
                <table>
               <tr>
                   <th>Name</th>
                   <th>Price</th>
               </tr>
               {this.props.filteredProducts.map(product => {
                   return (
                        <ProductRow name={product.name} price={product.price} {...product}/>
                   )
               })}
               </table>
            </div>
        )
    }
}


export default ProductTable;