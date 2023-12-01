import React from 'react'

export default function About(props) {

    props.setloading(false)
    props.setcategory("About Us")
    return (
        <div id='aboutbox' style={{textAlign:"justify", width:"75vw" , margin:"50px auto" , fontSize:"30px" , fontFamily: `Open Sans, sans-serif`}}>
            <p>  Mini News is a News App Built By Me.
                This is Made Using React JS. This is Made Just to Learn React using Project Based Learning.
                Still Mini News is a Useful app, You can Read news from different sources fetched from News Api.
            </p>

            <p style={{textAlign:"right" , marginTop:"15px"}}>Yours Lovingly</p>
            <p style={{textAlign:"right" , color:"yellow"}}>Vaddala Narasimha</p>
        </div>
    )
}
