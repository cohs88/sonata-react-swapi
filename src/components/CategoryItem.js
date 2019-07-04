/*
import React from 'react';
import  {connect} from 'react-redux';
import {selectSong} from '../actions';

class CategoryItem extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick={() => this.props.selectCategory(this.props.text)}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}


// export default CategoryItem;

// convention
const mapStateToProps = (state) => {
    console.log('mapstate', state);

    return {songs: state.songs};
};

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);
*/