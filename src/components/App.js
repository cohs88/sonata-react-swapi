import React from 'react';
import { connect } from 'react-redux'
import { updateState} from '../actions'
// import SearchBar from './SearchBar';
// import Categories from './Categories';
import CategoryDetailList from './CategoryDetailList';
import CategoryItem  from './CategoryItem';
// import { connect } from 'http2';

class App extends React.Component{
    

    render(){
        return (
            <div className="ui container">
                <button onClick={() => this.props.updateState('planets')}>Planets</button>
                <button onClick={() => this.props.updateState('starships')}>Spaceships</button>
                <button onClick={() => this.props.updateState('vehicles')}>Vehicles</button>
                <button onClick={() => this.props.updateState('people')}>People</button>
                <button onClick={() => this.props.updateState('films')}>Films</button>
                <button onClick={() => this.props.updateState('species')}>Species</button>

                {/* <Categories /> */}
                {/* <SearchBar /> */}
                <CategoryDetailList />
                <CategoryItem />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { categoryResults: state };
  }


export default connect(mapStateToProps, {updateState})(App);