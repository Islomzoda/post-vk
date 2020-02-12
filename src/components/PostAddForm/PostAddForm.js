import React, { useState } from 'react'
import { POST_ADD } from '../../action/actionTypes';
export default function PostAddForm({ dispatch }) {

   const [authorAvatar, setAuthorAvatar] = useState('');
   const [authorName, setAuthorName] = useState('');
   const [textContent, setTextContent] = useState('');
   const [photo, setPhoto] = useState('');
   
   const handleSubmit = evt => {
       evt.preventDefault();
       dispatch({type: POST_ADD, authorName, authorAvatar, photo, textContent});
   };

const handleAuthorAvatar = evt => {
    const value = evt.target.value;
    setAuthorAvatar(value);
};
const handleAuthorName = evt => {
    const value = evt.target.value;
    setAuthorName(value);
};
const handlePostText = evt => {
    const value = evt.target.value;
    setTextContent(value);
};
const handlePostImg = evt => {
    const value = evt.target.value;
    setPhoto(value);
}
    return (
        <div>
           
                <form  onSubmit={handleSubmit}>
                <div className="post-add-input">
                <div className="input-group mb-3">
                <input type="text" className="form-control mt-3" placeholder="Author avatar" onChange={handleAuthorAvatar} value={authorAvatar} />
                </div>
                <div className="input-group mt-3">
                <input type="text" className="form-control mt-3" placeholder="Имя Автора" onChange={handleAuthorName} value={authorName} />
                </div>
                <div className="input-group">
                <textarea className="input-control" type="text" className="form-control mt-3" placeholder="Что у Вас нового" onChange={handlePostText} value={textContent}/>
                </div>
                <div className="input-group">
                <input type="text" className="form-control mt-3" placeholder="Добавит Картину" onChange={handlePostImg} value={photo}/>
                </div>
                <button className="btn btn-outline-info mt-3">Добавить новый пост</button>
                </div>
                </form>
            
        </div>
    )
}
