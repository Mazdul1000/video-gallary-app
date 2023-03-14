import React, { useEffect, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAddNewVideoMutation, useEditVideoMutation } from '../../features/api/apiSlice';
import TextInput from '../ui/navbar/TextInput';
import TextArea from '../ui/TextArea';


const Form = ({video}) => {
const navigate = useNavigate();
const match = useMatch(`video/edit/${video?.id}`)

const [editVideo, { isLoading:editLoading, isError:editError, isSuccess:editSuccess}] = useEditVideoMutation();
const [addNewVideo ,{ isLoading, isError, isSuccess}] = useAddNewVideoMutation();
const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [views, setViews] = useState("");
const [thumbnail, setThumbnail] = useState("");
const [description, setDescription] = useState("");
const [duration, setDuration] = useState("");
const [date, setDate] = useState("")
const [link, setLink] = useState("")

const resetForm = () => {
    setTitle("");
    setAuthor("");
    setViews("");
    setThumbnail("");
    setDescription("");
    setDuration("");
    setDate("");
    setLink("");
}


useEffect(() => {
    if(match){
        const {title, author, views, thumbnail, duration, description, date, link} = video;
        setTitle(title);
        setAuthor(author);
        setDescription(description);
        setDuration(duration);
        setViews(views)
        setThumbnail(thumbnail)
        setDate(date)
        setLink(link)

    }
},[match])

const handleEdit = (e) => {
    e.preventDefault();

    const data={
        title,
        date,
        author,
        duration,
        views,
        thumbnail,
        link,
        description
    }
    editVideo({data, id: video.id})
         .then((data) => {
            console.log(data)
             navigate(`/videos/${video.id}`);
             resetForm();
             toast.success('Video info is updated!');    
         })
}

const handleAdd = (e) => {
    e.preventDefault();

    const data={
        title,
        date,
        author,
        duration,
        views,
        thumbnail,
        link,
        description
    }
    addNewVideo(data)
         .then((data) => {
            console.log(data)
             navigate(`/`);
             resetForm();
             toast.success('New video has been added');    
         })
}



    return (
        <form onSubmit={match ? handleEdit : handleAdd}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput title="Video Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput value={author} title="Author" onChange={(e) => setAuthor(e.target.value)}/>
                        </div>

                        <div className="col-span-6">
                            <TextArea title="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>

                        <div className="col-span-6">
                            <TextInput title="YouTube Video link" value={link} onChange={(e) => setLink(e.target.value)}/>
                        </div>

                        <div className="col-span-6">
                            <TextInput title="Thumbnail link" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput title="Upload Date" value={date} onChange={(e) => setDate(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video Duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video no of views" value={views} onChange={(e) => setViews(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>

                {/* <Success message="Video was added successfully" /> */}
            </div>
        </form>
    );
};

export default Form;