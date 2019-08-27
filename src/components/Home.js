import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import CategoriesContext from '../contexts/CategoriesContext';
import { connect } from 'react-redux'
import { updateState} from '../actions'

class Home extends React.Component  
{
    static contextType = CategoriesContext;

    onOptionClick = (categorySelected) => {
        this.props.updateState(categorySelected); //'planets'
        this.context.onCategoryChange(categorySelected);
        this.props.history.push('/list/' + categorySelected);
    }
    render(){
        
        return (
            <div>
                <button className="button ui" onClick={() => this.onOptionClick('planets') }>Planets</button>
                <button className="button ui" onClick={() => this.onOptionClick('starships') }>Spaceships</button>
                <button className="button ui" onClick={() => this.onOptionClick('vehicles') }>Vehicles</button>
                <button className="button ui" onClick={() => this.onOptionClick('people') }>People</button>
                <button className="button ui" onClick={() => this.onOptionClick('films') }>Films</button>
                <button className="button ui" onClick={() => this.onOptionClick('species') }>Species</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { categoryResults: state };
}
     
export default connect(mapStateToProps, {updateState})(Home);