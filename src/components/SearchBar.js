import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.atSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({ term : event.target.value});
    }

    render(){
        return(
            <div className='searchbar ui segment' style={{ margin: '20px 10px', background: 'purple'}}>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field' style={{background: 'purple'}}>
                        <label 
                        style={{textAlign: 'center', color: 'white', marginTop: '5px' }}
                        >
                           <i> Video Search </i>
                        </label>
                        <input 
                            type='text' 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;