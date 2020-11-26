import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'


class FilterableProductTable extends React.Component {
    state = {
        products: this.props.products.data,
        filteredProducts: this.props.products.data
    }

    handleFilterProducts = (query) => {
        let visibleProducts = [...this.state.products].filter((product) => {
            return product.name.toLowerCase().includes(query.toLowerCase());
        })
    
        this.setState({
            filteredProducts: visibleProducts
        })
    
    }

  
    render () {
       
       return (
       <div>
            <div>
                <SearchBar filteredProducts= {this.handleFilterProducts}/>
            </div>
            <div>
           <ProductTable filteredProducts= { this.state.filteredProducts}/>
           </div>
        </div>
       );
    }
}


export default FilterableProductTable;