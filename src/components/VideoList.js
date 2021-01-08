import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({video, onselect}) => {
    const renderList = video.map((videos) => {
        return (
            <VideoItem 
                key={videos.id.videoId}
                onselect={onselect} 
                videos={videos} 
            />
        );
    });

    return ( 
        <div className='ui relaxed divided list'>
            {renderList}
        </div>
    );
}

export default VideoList;