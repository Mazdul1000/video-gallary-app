import React from 'react';
import { useGetRelatedVideosQuery } from '../../features/api/apiSlice';
import RelatedItem from './RelatedItem';

const RelatedVideos = ({title, id}) => {

    const { data:relatedVideos, isLoading, isError} = useGetRelatedVideosQuery({title, id});

    let content;

    if(isLoading){
        content = <div>Loading...</div>
    }

    if(!isLoading && isError){
        content = <div> Something went wrong</div>
    }

    if(!isLoading && !isError && relatedVideos.length > 0) {
        content = relatedVideos.map((video) => <RelatedItem key={video.id} video={video}/>)
    }

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
};

export default RelatedVideos;