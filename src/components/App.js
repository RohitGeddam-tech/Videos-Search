import React from 'react';
import SearchBar from "./SearchBar";
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
       const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response.data.items);
        this.setState({ 
            videos: response.data.items ,
            selectedVideo: response.data.items[0]
        });
    }

    componentDidMount() {
        this.onTermSubmit('Mobiles');
    }

    onVideoSelect = (videos) => {
        console.log('log',videos);
        this.setState({ selectedVideo: videos});
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar atSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail 
                                videos={this.state.selectedVideo}
                            />
                        </div>
                        <div className='five wide column'>
                            <VideoList 
                                onselect={this.onVideoSelect} 
                                video={this.state.videos}
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;