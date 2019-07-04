import React from 'react';
import  {connect} from 'react-redux';
import { updateCategoryItemState} from '../actions';
import SearchBar from './SearchBar';
import './CategoryDetailList.css'

const CategoryDetailList = (props) => {
    
    return (
        <div>
        <SearchBar />
        <div className="CategoryDetailList-Container">

        <ul>
            {

                props.categoryResults.map(function(res){
                        let name = res.hasOwnProperty('name') ? res.name : res.title;
                        return <li key={name} onClick={() => props.updateCategoryItemState(res.url)  } >{name}</li>
                    } 
                )
            } 
        </ul>
    </div>
    </div>
    );
}
    


function mapStateToProps({ categoryResults }) {
    return { categoryResults };
}

export default connect(mapStateToProps, {updateCategoryItemState})(CategoryDetailList)