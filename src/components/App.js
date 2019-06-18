import React from 'react';
import SearchBar from './SearchBar';
import Categories from './Categories';

class App extends React.Component{
    onTermSubmit = async (term) =>{
        // const response = await youtube.get('/search', {
        //      params:{
        //          q:term
        //      }
        //  });
 
        //  this.setState({
        //      videos: response.data.items,
        //      selectedVideo: response.data.items[0]
        //  });
     };

    render(){
        return (
            <div className="ui container">
                <Categories />
                <SearchBar onFormSubmit={this.onTermSubmit}  />
            </div>
        );
    }
}


export default App;