import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import axios from 'axios';

const Tweet = ({data}) => {

    const [query, setQuery] = useState('');

    const pushData = (event) => {
        event.preventDefault();

        axios.post('http://localhost:4000/tweets', {
            query: query 
        })
        .then(response => {
            console.log("ok");
            data(query);
        })
        .catch(err => console.log('err'))
    }

    return <React.Fragment>
        <div style={{marginTop: '25px', marginLeft: '-23px'}}>
            <img src="/images/twitterBird.png" className='bird-icon'/>
            <span className='text'>Twitter Search Query</span>
        </div>
        <div>
            <form onSubmit={pushData}>
                <FiSearch className='search-icon' onClick={pushData}/>
                <input className='search-bar' placeholder='Search Twitter'
                    onChange={(event) => setQuery(event.target.value)}
                />
            </form>
        </div>
    </React.Fragment>
}

export default React.memo(Tweet);