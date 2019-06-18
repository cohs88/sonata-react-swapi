import React from 'react';
class CategoryItem extends React.Component{
    render(){
        return (
            <div>
                <button>
                    {this.props.text}
                </button>
            </div>
        );
    }
}


export default CategoryItem;