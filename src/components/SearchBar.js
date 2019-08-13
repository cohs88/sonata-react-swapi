import React from 'react';
import  {connect} from 'react-redux';
import { filterDataAction} from '../actions';

function isFormValid(termInput) {
  return termInput.length > 0;
}

class SearchBar  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          termInput: '',
          errors: {
            termInput: ''
          }
        };
    }

    onInputChange = (event)=>{
        this.setState({termInput: event.target.value});
    };

    onFormSubmit = (event) =>{
        event.preventDefault();

        const errors = this.state.errors;
        const value = this.state.termInput;
        
        if (!isFormValid(value)) {
          
          errors.termInput = 'Enter chars';
          this.setState({errors});
          return;
        }
        
        this.props.filterDataAction(value);
    };

    render(){
        const {errors} = this.state;
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form" noValidate>
                    <div className="field">
                        <input 
                            type="text"
                            value={this.state.termInput}
                            name="termInput"
                            onChange={this.onInputChange}
                            noValidate
                        />
                        {errors.termInput.length > 0 && <span className='error'>{errors.termInput}</span>}
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state };
  }


export default connect(mapStateToProps, {filterDataAction})(SearchBar);

// export default SearchBar;