import React, { useState } from 'react'
import { COMMENT_ADD } from '../../action/actionTypes';

export default function CommentAddForm({ postId, dispatch }) {
    const [comment, setComment] = useState('');
    const [authorAvatar, setAuthorAvatar] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [photo, setPhoto] = useState('')


    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch({ type: COMMENT_ADD, authorAvatar, photo, authorName, comment, postId });
   
    };
   
    const handleChange = evt => {
        const value = evt.target.value;
        setComment(value); // что было до - нас не интересует
    };

    const handleAddImg = evt => {
        const value = evt.target.value;
        setAuthorAvatar(value);
    };
    const handleAddName = evt =>{
        const value = evt.target.value;
        setAuthorName(value);
    };
    const handleAddPhoto = evt => {
        const value = evt.target.value;
        setPhoto(value);
    }

    return (
        <form onSubmit={handleSubmit}   >
        <div className="comment_add_forms mt-5">
            <input className="form-control mt-3" onChange={handleAddName} value={authorName} placeholder="AvtorName"></input>
            <input className="form-control mt-3" onChange={handleAddImg} value={authorAvatar} placeholder="Avatar Url"></input>  
            <textarea  className="form-control mt-3" onChange={handleChange} value={comment} placeholder="Добавить Коментарии...  "></textarea>
            <input className="form-control mt-3" onChange={handleAddPhoto} value={photo} placeholder="Добавте Картинку" ></input>
            <button className="btn btn-outline-info mt-2">Добавить</button>
            </div>
        </form>
    )
}
