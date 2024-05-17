import React from 'react'

export const BookDetailBox = () => {
    return (
        <div className='BuyNowDetail'>
            <div className='buynowdetail_left'>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <div className='BuyNowDetail_pricing'>
                    {props.paperback === "" ? <></> : <><a href={`https://www.amazon.com/gp/product/${props.link}`}><span>Paperback - ${props.paperback} (BUY FROM AMAZON)</span></a></>}
                    {/* <a href={`https://www.amazon.com/gp/product/${props.link}`}><span>Paperback - ${props.paperback} (BUY FROM AMAZON)</span></a> */}
                    {props.Ebook === "" ? <></> : <><a href={`https://www.amazon.com/gp/product/${props.link}`}><span>E-Book - ${props.Ebook} (BUY FROM AMAZON)</span></a></>}
                    {props.Hardcover === "" ? <></> : <>    <a href={`https://www.amazon.com/gp/product/${props.link}`}><span>Hardcover - ${props.Hardcover}</span></a></>}
                </div>
            </div>
            <div className='buynowdetail_right'>
                <img src={props.picture} alt='Book Cover'/>
                {/* <Player
                    src={props.trailer}
                    aspectRatio="auto"
                /> */}
            </div>
        </div>
    )
}
