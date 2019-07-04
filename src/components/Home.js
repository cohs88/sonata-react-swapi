import React from 'react';
import { connect } from 'react-redux'
import { updateState} from '../actions'
import { withRouter} from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <button onClick={() => { props.updateState('planets'); props.history.push('/list') }  }>Planets</button>
            <button onClick={() => { props.updateState('starships'); props.history.push('/list') } }>Spaceships</button>
            <button onClick={() => {props.updateState('vehicles'); props.history.push('/list')} }>Vehicles</button>
            <button onClick={() => {props.updateState('people'); props.history.push('/list')} } >People</button>
            <button onClick={() => {props.updateState('films'); props.history.push('/list')} }>Films</button>
            <button onClick={() => {props.updateState('species'); props.history.push('/list') }}>Species</button> 
        </div>
    );
}
    
function mapStateToProps(state) {
    return { categoryResults: state };
}


export default connect(mapStateToProps, {updateState})(Home);