import React, {useEffect, useState} from 'react';
import TweetCard from './TweetCard';
import axios from 'axios';

const Cards = ({exe}) => {

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        console.log('==============')
        console.log(feeds)

        axios.get('http://localhost:4000/get_tweets')
        .then(response => setFeeds(response.data))
        .catch(err => console.log(err))

    }, [exe])

    return <React.Fragment>
        
        <div className='cards-container'>
            {
                feeds.map((item, id) => {
                    return <TweetCard key={id} item={item}/>
                })
            }
        </div>
    </React.Fragment>
}

export default React.memo(Cards);
