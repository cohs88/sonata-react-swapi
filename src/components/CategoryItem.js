import React from 'react';
import  {connect} from 'react-redux';
import './CategoryItem.css';
import { Link} from 'react-router-dom';
import CategoriesContext from '../contexts/CategoriesContext';

const CategoryItem = (props) => (
    <div>
        <Link to="/" className="item">
            Home
        </Link>
        <CategoriesContext.Consumer>
            {
                ({category}) => <h2>{category}</h2>
            }
        </CategoriesContext.Consumer>
        <div>{JSON.stringify(props.childResults)}</div>
    </div>
)

function mapStateToProps({childResults}) {
    return { childResults };
}

export default connect(mapStateToProps)(CategoryItem);