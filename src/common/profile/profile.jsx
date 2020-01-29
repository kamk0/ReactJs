import React from 'react'
import "./profile.css"
import { Mypost } from './mypost/mypost';

export const Profile = () => {
    return (
        <section className="content">
            <div>
                <div>BG</div>
                <img className="content__img" src="https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg" alt="img" />
                <div className="content__title">Title</div>
                <div className="content__desc">description</div>
            </div>
            <Mypost />
        </section>
    )
};