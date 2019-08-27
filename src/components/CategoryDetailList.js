import React from 'react';
import  {connect} from 'react-redux';
import { updateCategoryItemState} from '../actions';
import SearchBar from './SearchBar';
import './CategoryDetailList.css';
import { Link} from 'react-router-dom';
import useResources from './useResource';

const CategoryDetailList = (props) =>{
    const {category} = props.match.params;

    const categoryResults2 = useResources(category);

    return (
        <div>
            <Link to="/" className="item">Home</Link>    
            <SearchBar />
            <div className="CategoryDetailList-Container">
                <ul>
                    {
                        Object.values(categoryResults2).map(function(res){
                                let name = res.hasOwnProperty('name') ? res.name : res.title;
                                return <li key={name} onClick={() => {props.updateCategoryItemState(res.url); props.history.push('/detail') }   } >{name}</li>
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