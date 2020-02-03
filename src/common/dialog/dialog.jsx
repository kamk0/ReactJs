import React from 'react'
import "./dialog.scss"

export const Dialog = () => {
    return (
        <div className='dialog'>
            <div className='dialog-item'>
                <div className='item'>Dmitri</div>
                <div className='item'>Anrey</div>
                <div className='item'>Igor</div>
                <div className='item'>Dmitri</div>
                <div className='item'>Anrey</div>
                <div className='item'>Igor</div>
            </div>
            <div className='dialog-mesages'>
                <div className='mesage'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, velit?</div>
                <div className='mesage'>Lorem ipsum dolor sit amet.</div>
                <div className='mesage'>Lorem, ipsum dolor.</div>
                <div className='mesage'>Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                <div className='mesage'>Lorem ipsum dolor sit amet consectetur.</div>
                <div className='mesage'>Lorem ipsum dolor sit.</div>
            </div>
        </div>
    )
};