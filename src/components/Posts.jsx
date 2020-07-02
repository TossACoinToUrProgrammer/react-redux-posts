import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts=({posts})=>{
    if(!posts || !posts.length){
        return <p>Постов нет</p>
    }
    return(
        <div>
            {posts.map(post=><Post key={post.text+post.title} post={post} />)} 
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);