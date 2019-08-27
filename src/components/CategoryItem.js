import React from 'react';
import  {connect} from 'react-redux';
import './CategoryItem.css';
import { Link} from 'react-router-dom';

const CategoryItem = (props) => (
    <div>
        <Link to="/" className="item">
            Home
        </Link>
        <div>{JSON.stringify(props.childResults)}</div>
    </div>
)

function mapStateToProps({childResults}) {
    return { childResults };
}

export default connect(mapStateToProps)(CategoryItem);