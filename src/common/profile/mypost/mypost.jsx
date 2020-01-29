import React from 'react'
import { Post } from './post/post';
import "./mypost.css"

export const Mypost = () => {
    return (
        <div>
            <Post message="My first post" name={`Igor Fedoseev`} />
            <Post message="My second post" name={`Andron Leb`} />
        </div>
    )
};