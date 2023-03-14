import React from 'react';
import { useParams } from 'react-router-dom';
import RelatedVideos from '../components/relatedVideoList/RelatedVideos';
import Description from '../components/videoPlayer/Description';
import Player from '../components/videoPlayer/Player';
import { useGetSingleVideoQuery } from '../features/api/apiSlice';

const Video = () => {
    const {videoId} = useParams();
    const { data:video, isLoading, isError } = useGetSingleVideoQuery(videoId) || {};

    if(isLoading){
        return <div> Loading ... </div>
    }
    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <Player video={video}/>
                        <Description video={video}/>
                    </div>

                    <RelatedVideos title={video.title} id={video.id}/>
                </div>
            </div>
        </section>
    );
};

export default Video;