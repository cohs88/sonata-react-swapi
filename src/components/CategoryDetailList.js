import React from 'react';
import  {connect} from 'react-redux';

const CategoryDetailList = (props) => (
    <ul>
        {
            props.categoryResults.map(res => <li key={res.name}>{res.name}</li>)
        } 
    </ul>
)

function mapStateToProps({ categoryResults }) {
    return { categoryResults };
}

export default connect(mapStateToProps)(CategoryDetailList)