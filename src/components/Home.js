import React from 'react';
import { connect } from 'react-redux'
import { updateState} from '../actions'

const Home = (props) => {
    return (
        <div>
            <button onClick={() => props.updateState('planets')}>Planets</button>
            <button onClick={() => props.updateState('starships')}>Spaceships</button>
            <button onClick={() => props.updateState('vehicles')}>Vehicles</button>
            <button onClick={() => props.updateState('people')}>People</button>
            <button onClick={() => props.updateState('films')}>Films</button>
            <button onClick={() => props.updateState('species')}>Species</button> 
        </div>
    );
}
    
function mapStateToProps(state) {
    return { categoryResults: state };
}


export default connect(mapStateToProps, {updateState})(Home);