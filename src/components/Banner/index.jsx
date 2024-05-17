import React from 'react'
export const Banner = (props) => {
    return (
        <div className='Landing'>
            <div className='landing_left'>
                <p>{props.title}</p>
                <h1>{props.subTitle}</h1>
                <p>{props.description}</p>
                <button className='btn' onClick={props.navigateRoute}>{props.btnTxt}</button>
            </div>
            <div className='landing_right'>
                <img src={props.bannerImage} draggable="false" alt='Banner Image' />
            </div>
        </div>
    )
}
