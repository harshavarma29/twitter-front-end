import React from 'react';

const Card = ({item}) => {
    return <React.Fragment>
        <div className='card'>
            <div className='left'>
                <div className='icon'>
                    <img alt='profile-image' src={item.image} className='profile-image'/>
                </div>
            </div>
            <div className='right'>
                <span className='gap'><b>{item.username}</b></span>
                <span className='gap light'>{item.location}</span>
                <span className='gap light'>{item.timezone}</span>
                <span className='gap light'>{item.date}</span>
                <p className='description'>
                    {item.description}
                </p>
                <span className='gap'>Retweets: {(item.retweets)? item.retweets: 0}</span>
            </div>
        </div>
    </React.Fragment>
}

export default React.memo(Card);