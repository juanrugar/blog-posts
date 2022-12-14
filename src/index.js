import React from 'react';
import ReactDOM from 'react-dom';
//connecting with the SingleComponent file
import SingleComment from './SingleComment';
import profile1 from './image/pic-1.jpg';
import profile2 from './image/pic-2.jpg';
import profile3 from './image/pic-3.jpg';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard> 
                <div>
                    Hello, my name is Sarah, I live in Patras.
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                name='Alex' 
                date='Today at 5:00PM' 
                text='It is amazing'
                picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                name='Jack' 
                date='Today at 6:00PM' 
                text='Great!'
                picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                name='Sarah' 
                date='Today at 7:00PM' 
                text='Thanks'
                picture={profile3}
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
