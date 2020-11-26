import React from 'react';
import ProductRow from './ProductRow'

class SearchBar extends React.Component {
 
    state = {
        searchQuery: ''
  }

  handleOnchange = (event) => {
    this.props.filteredProducts(event.target.value);
      this.setState ({
        searchQuery : event.target.value
    })
  }
    
    
    render () {
        return (
            <div>
                <form>
                    <label>Search</label>
                    <input type="text" 
                    name="searchQuery" 
                    value={this.state.searchQuery}
                    onChange={this.handleOnchange}
                    />

                    <label>Only show products on stock</label>
                    <input type="checkbox"></input>

                </form>
            </div>
        )

    }
}


export default SearchBar