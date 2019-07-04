import React from 'react';
import  {connect} from 'react-redux';
import { updateCategoryItemState} from '../actions'

const CategoryDetailList = (props) => (
    <ul>
        {
            props.categoryResults.map(res => <li key={res.name} onClick={() => props.updateCategoryItemState(res.url)  } >{res.name}</li>)
        } 
    </ul>
)

function mapStateToProps({ categoryResults }) {
    return { categoryResults };
}

export default connect(mapStateToProps, {updateCategoryItemState})(CategoryDetailList)