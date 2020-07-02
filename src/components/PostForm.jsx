import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions';

const PostForm=(props)=>{
    let [title, editTitle]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        if(!title.trim())return 0;
        props.createPost({id:Date.now(), title:title});
        editTitle('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="title">Заголовок поста</label>
                <input value={title} onChange={(e)=>editTitle(e.target.value)} type="text" name="title" className='form-control' id=""/>
            </div>
            <button className="btn btn-success">Создать</button>
        </form>
    )
}

export default connect(null,{createPost})(PostForm);