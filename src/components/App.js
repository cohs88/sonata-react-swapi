import React from 'react';
import CategoryDetailList from './CategoryDetailList';
import CategoryItem  from './CategoryItem';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom';
import {CategoriesStore} from '../contexts/CategoriesContext';

class App extends React.Component{
    

    render(){
        return (
            <div className="ui container">
                <CategoriesStore>
                    <BrowserRouter>
                        <Route path="/" exact component={Home} />
                        <Route path="/list" exact component={CategoryDetailList} />
                        <Route path="/list/:category" exact component={CategoryDetailList} />
                        <Route path="/detail" exact component={CategoryItem} />
                    </BrowserRouter>
                </CategoriesStore>
            </div>
        );
    }
}


export default App;
