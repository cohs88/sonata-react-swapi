import React from 'react';
import { connect } from 'react-redux'
import { updateState} from '../actions'
// import SearchBar from './SearchBar';
// import Categories from './Categories';
import CategoryDetailList from './CategoryDetailList';
// import { connect } from 'http2';

class App extends React.Component{
    

    render(){
        return (
            <div className="ui container">
                <button onClick={() => this.props.updateState('planets')}>Planets</button>
                <button>Spaceships</button>
                <button>Vehicles</button>
                <button>People</button>
                <button>Films</button>
                <button>Species</button>

                {/* <Categories /> */}
                {/* <SearchBar /> */}
                <CategoryDetailList />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { categoryResults: state };
  }


export default connect(mapStateToProps, {updateState})(App);