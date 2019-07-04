import React from 'react';
import { connect } from 'react-redux'
import { updateState} from '../actions'
import SearchBar from './SearchBar';
import CategoryDetailList from './CategoryDetailList';
import CategoryItem  from './CategoryItem';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component{
    

    render(){
        return (
            <div className="ui container">
                <Home />

                <SearchBar />
                <CategoryDetailList />
                <CategoryItem />
            </div>
        );
    }
}


export default App;
