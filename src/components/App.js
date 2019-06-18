import React from 'react';
import SearchBar from './SearchBar';

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
                <SearchBar onFormSubmit={this.onTermSubmit}  />
            </div>
        );
    }
}


export default App;