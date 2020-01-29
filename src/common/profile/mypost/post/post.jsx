import React from 'react'
import "./post.css"

export const Post = (props) => {
    console.log(props.message);
    return (
        <div className="mypost">
            <img className="mypost__img "src="https://klike.net/uploads/posts/2018-06/1528720172_1.jpg" alt="asd"/>
            <div className="mypost__block">
                <h2 className="mypost__title">{props.name}</h2>
                <p className="mypost__message">{props.message}</p>
            </div>
        </div>
    )
};