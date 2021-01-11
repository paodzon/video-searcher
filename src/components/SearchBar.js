import React from 'react';
import './SearchBar.css';
import { InputGroup, Input } from 'reactstrap';

class SearchBar extends React.Component {

    state = {input :""};


    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.input);
    }

    onHandleSearch = (e) =>{
        const val = e.target.value;
        this.setState({input:val})

    }

    render(){
        return (
            <div className="searchbar">
            <form onSubmit={this.onFormSubmit}>
            <InputGroup>
                <Input className="searchbar-input" placeholder="Search videos" value={this.state.input} onChange={this.onHandleSearch} />
              </InputGroup>
            </form>

            </div>
          );
    }

}

export default SearchBar
