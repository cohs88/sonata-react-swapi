import React from 'react';
import  {connect} from 'react-redux';
import './CategoryItem.css';

const CategoryItem = (props) => (
    <div>{JSON.stringify(props.childResults)}</div>
)

function mapStateToProps({childResults}) {
    return { childResults };
}

export default connect(mapStateToProps)(CategoryItem);