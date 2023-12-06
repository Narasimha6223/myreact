import React, { useState } from "react"


export default function Newsitem(props) {



    return (

        <>
            <div className='newsbox flex align-center justify-around wrap'>
                <div className="singlebox flex align-center justify-center flex-col">
                    <img src={props.imgurl === null || undefined ? "/noimage.jpg" : props.imgurl} alt="No Image Available" />

                </div>
                <div className="multiplebox flex align-start justify-center flex-col">
                    <p><strong className="source-name">{props.source}</strong> <br />
                        <a target="_blank" href={props.url} style={{ color: "white", textDecoration: "none" }}>{props.desc}...Click to Read More</a></p>
                        <p>By <strong>{props.author}</strong> on <strong>{props.date}</strong></p>
                        {/* <p>By <strong></strong></p> */}

                   

                </div>
            </div>
            <hr className="coolhr" style={{ width: "70vw", margin: "15px auto", }} />
        </>
    )
}

// business entertainment general health science sports technology
