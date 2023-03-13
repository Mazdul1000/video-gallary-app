import React from 'react';
import { useGetVideosQuery } from '../../features/api/apiSlice';
import VideoCard from './VideoCard';

const Videos = () => {

    const { data:videos, isLoading, isError } = useGetVideosQuery();


    let content;

    if(isLoading){
        content = <div>Loading...</div>
    }

    if(!isLoading && isError){
        content = <div> Something went wrong</div>
    }

    if(!isLoading && !isError && videos.length > 0) {
        content = videos.map((video) => <VideoCard key={video.id} video={video}/>)
    }
    return (
        <>
            {content}
        </>
            
      
    );
};

export default Videos;