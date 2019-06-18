import React from 'react';
class CategoryItem extends React.Component{
    render(){
        return (
            <div>
                <input 
                    type="button" 
                    value={this.props.text}
                />
            </div>
        );
    }
}


export default CategoryItem;