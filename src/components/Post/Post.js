import React from 'react'
import Comments from '../Comments/Comments'
import CommentAddForm from '../CommentAddForm/CommentAddForm'
import { POST_LIKE } from '../../action/actionTypes'

export default function Post({ post, dispatch }) {
    const handleLike = () => {
        dispatch({ type: POST_LIKE, postId: post.id });
    };

    return (
       <div>
       <article className="post">
            <div className="post_content">
                <div className="post_header">
                    <a href={post.authorLink}>
                        <img src={post.authorAvatar} alt="" />
                    </a>
                    <div className="post_header_info">

                        <h5>{post.authorName}</h5>
                        <div className="post_date"></div>
                    </div>
                </div>
                
                <div>{post.textContent}</div>
                <div className="post-img">
                    <img src={post.photo} alt="" width="470" height="420"/>
                </div>
                <footer>
                    <div>{post.likes} <button onClick={handleLike} className="btn btn-outline-info" ><div > Нравится</div></button>
                    </div>  
                </footer>
                <div className="forms_for_add"></div>
                <CommentAddForm postId={post.id} dispatch={dispatch} />
                <Comments comments={post.comments} dispatch={dispatch} />
            </div>
        </article>
        </div>
    )
}
