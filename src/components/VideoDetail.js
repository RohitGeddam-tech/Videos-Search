import React from 'react';

const VideoDetail = ({ videos }) => {
    if(!videos){
        return <div style={{color: 'white'}}>Loading..</div>
    }

    //+ {videos.id.videoId}
    const VideoSrc = `https://www.youtube.com/embed/${videos.id.videoId}`
                        

    return (
        <div style={{color: 'white'}}> 
            <div className='ui embed'>
                <iframe title='video player' src={VideoSrc} />
            </div> 
            <div className='ui segment'>
                <h4 className='ui header'>{videos.snippet.title}</h4>
                <p style={{color: 'black'}}>{videos.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;