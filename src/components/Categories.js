import React from 'react';
import  {connect} from 'react-redux';
import {selectCategory} from '../actions';

class Categories extends React.Component{
    renderList(){
        return this.props.categories.map((category) =>{
            return (
                <div className="item" key={category.title}>
                    <div className="">
                        <button 
                            onClick={() => this.props.selectCategory(category)}
                            className="ui button primary">
                            {category.title}
                        </button>
                    </div>
                </div>
            );
        });
    }

    render(){
        console.log('categories.render.props', this.props);
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}


// export default Categories;

// convention
const mapStateToProps = (state) => {
    console.log('categories.mapStateToProps', state);

    return {categories: state.categories };
};

export default connect(mapStateToProps,{
    selectCategory:selectCategory
})(Categories);