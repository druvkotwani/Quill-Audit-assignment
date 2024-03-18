'use client'

import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Tweet = () => {
    return (

        <div className='px-6 py-4'>
            <TwitterTweetEmbed tweetId="1742906560794296402" />
        </div>

    )
}

export default Tweet