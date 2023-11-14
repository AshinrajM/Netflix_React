import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Mismatched</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h2 className='description'>After a disastrous set-up by their families, two teens strike up a tentative friendship at their summer program — but deeper feelings aren’t far behind.</h2>
                <h2></h2>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner