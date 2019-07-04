import React from 'react';
import  {connect} from 'react-redux';
import { updateCategoryItemState} from '../actions'

const CategoryDetailList = (props) => {
    
    return (
        <ul>
        {

            props.categoryResults.map(function(res){
                    let name = res.hasOwnProperty('name') ? res.name : res.title;
                    return <li key={name} onClick={() => props.updateCategoryItemState(res.url)  } >{name}</li>
                } 
            )
        } 
    </ul>
    );
}
    


function mapStateToProps({ categoryResults }) {
    return { categoryResults };
}

export default connect(mapStateToProps, {updateCategoryItemState})(CategoryDetailList)