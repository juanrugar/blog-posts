import React from 'react';


const SingleComment = (props) => {
    
    return(
        <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={props.picture} alt="profile" />
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        {props.name}
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            {props.date}
                        </span>
                    </div>
                    <div className='text'>
                            {props.text}
                    </div>
                </div>
            </div>
    )
}

//connecting with the <App> component at the index.js file (and to the rest of the project)
export default SingleComment;