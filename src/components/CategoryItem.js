import React from 'react';
import  {connect} from 'react-redux';

const CategoryItem = (props) => (
    <p>{JSON.stringify(props.childResults)}</p>
)

function mapStateToProps({childResults}) {
    return { childResults };
}

export default connect(mapStateToProps)(CategoryItem);