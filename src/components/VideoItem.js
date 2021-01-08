import React from 'react';
import './VideoItem.css';

const VideoItem = ({ videos, onselect }) => {
    return (
        <div onClick={() => onselect(videos)} className='video-item item'>
            <img className='ui image' alt={videos.snippet.title} src={videos.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='header' style={{color: 'white'}}>
                    {videos.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
