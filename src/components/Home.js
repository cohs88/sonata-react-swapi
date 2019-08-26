import React from 'react';
import { connect } from 'react-redux'
import { updateState} from '../actions'
import { withRouter, Link} from 'react-router-dom';

const Home = (props) => {
    // const [resource, setResource] = useState('categories');

    return (
        <div>
            <Link to="/list/planets" className="button ui">
                Planets
            </Link>
            <Link to="/list/starships" className="button ui">
                Spaceships
            </Link>
            <Link to="/list/vehicles" className="button ui">
                Vehicles
            </Link>
            <Link to="/list/people" className="button ui">
                People
            </Link>
            <Link to="/list/films" className="button ui">
                Films
            </Link>
            <Link to="/list/species" className="button ui">
                Species
            </Link>
        </div>
    );
}
    
function mapStateToProps(state) {
    return { categoryResults: state };
}


export default connect(mapStateToProps, {updateState})(Home);