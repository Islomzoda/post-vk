import React, { useReducer, } from 'react'
import Post from '../Post/Post';
import PostAddForm from '../PostAddForm/PostAddForm';
import { COMMENT_ADD, COMMENT_LIKE, COMMENT_REMOVE, POST_LIKE, POST_ADD } from '../../action/actionTypes';

let nextPostId = 1;
let nextCommentId = 1;



const initialPosts = [
    {   id: nextPostId++,
        authorLink: 'https://vk.com/wall-149187028_188',
        authorAvatar: 'https://sun9-69.userapi.com/c852020/v852020365/12d718/ttreDHtKM80.jpg?ava=1',
        authorName: 'Алиф',
        photo:'https://sun9-10.userapi.com/c855320/v855320927/1f5d97/GU429e3eKTs.jpg',
        likes: 3, 
        textContent: `😎 Барои терминалҳои пардохтиамон дар Хуҷанд табиб ва дӯсти наздикро меҷӯем. Агар техника ва таъмири онро дӯст доред, пас, ин кор барои шумост.
        ⠀
        
        ⠀
        —————————————————————————————
        ⠀
        😎 Ищем целителя и друга для наших платёжных терминалов в Худжанде. Если любите работать с техникой и выявлять её дефекты, эта работа именно для вас.
        ⠀
       
        📱 900`, 
        comments: [] },
    {
        id: nextPostId++,
        authorAvatar: 'https://sun9-69.userapi.com/c852020/v852020365/12d718/ttreDHtKM80.jpg?ava=1', 
        authorName: 'Vasya',
        photo:'https://i.pravatar.cc/700',
        likes: 4,
        textContent: 'First Post',
        comments: [
                    {  
                    id: nextCommentId++,
                authorAvatar: 'https://sun9-69.userapi.com/c852020/v852020365/12d718/ttreDHtKM80.jpg?ava=1',
                photo: 'https://i.pravatar.cc/600', 
                authorName: 'Petya',
                textContent: 'Nice Post', 
                likes: 0 },
                ]
    },
];

function likeComment(comments, id) {
    return comments.map(c => {
        if (c.id !== id) {
            return c;
        }
        return { ...c, likes: c.likes + 1 };
    });
}

function removeComment(comments, id) {
    return comments.filter(c => c.id !== id);
};

function addComment(comments, comment, authorName, photo, authorAvatar) {
    return [...comments, { id: nextCommentId++, authorName, photo, authorAvatar, textContent: comment, likes: 0 }];
};

function reducer(posts, action) {
    
    switch (action.type) {
        case POST_LIKE:
            {
                // const { postId } = action;
                const postId = action.postId;
                return posts.map(p => {
                    if (p.id !== postId) {
                        return p;
                    }
                    return { ...p, likes: p.likes + 1 };
                });
            }
        case POST_ADD:
            {
                const { authorAvatar, authorName, textContent, photo } = action;
                return [{
                    id: nextPostId++,
                    authorName,
                    authorAvatar,
                    textContent,
                    likes:0,
                    photo,
                    comments: [],
                }, ...posts]
            }
   
        case COMMENT_ADD:
            {
                const { postId, comment, authorName, photo, authorAvatar } = action;
                return posts.map(
                    p => ({
                        ...p,
                        comments: p.id !== postId ? p.comments : addComment(p.comments, comment, photo, authorName, authorAvatar)
                    })
                );
            }
        case COMMENT_LIKE:
            {
                const { commentId } = action;
                return posts.map(
                    p => ({ ...p, comments: likeComment(p.comments, commentId) })
                );
            }
        case COMMENT_REMOVE:
            {
                const { commentId } = action;
                return posts.map(
                    p => ({ ...p, comments: removeComment(p.comments, commentId) })
                );
            }
        default:
            return posts;
    }
}


export default function Wall() {
    const [posts, dispatch] = useReducer(reducer, initialPosts);

    return (
        <div>
            <PostAddForm dispatch={dispatch} />

            {posts.map(o => <Post
                key={o.id}
                post={o}
                dispatch={dispatch}
            />)}
        </div>
    )
}
