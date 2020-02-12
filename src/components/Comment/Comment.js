import React from 'react'
import { COMMENT_LIKE, COMMENT_REMOVE } from '../../action/actionTypes';

export default function Comment({ comment, dispatch }) {
    const handleLike = () => {
        dispatch({ type: COMMENT_LIKE, commentId: comment.id });
    };
    const handleRemove = () => {
        dispatch({ type: COMMENT_REMOVE, commentId: comment.id });
    };

    return (
        <article className="comment">
            <img src={comment.authorAvatar} alt="" className="authorAvatar"/>
            <h5>{comment.authorName}</h5>
            <div>
                <img src={comment.photo} alt="" width="470" height="320"/>
            </div>
            <div>{comment.textContent}</div>
            <footer>
                <div className="">{comment.likes} <button onClick={handleLike} className="btn btn-outline-info" >Нравится</button></div>
                <div><button onClick={handleRemove} className="btn btn-outline-danger">Удалить!</button></div>
            </footer>
        </article>
    )
}
