import React from 'react'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function StoryDisplay({ stories }) {
    const storyObjectArr = Object.values(stories)

    return (
        storyObjectArr.map((story) => {
            const { by, time, text, dead, parent, poll, kids, url, title } = story

            return (
                <div>
                    <h2>
                        <a href={url}>{title}</a>
                    </h2>
                    <h4>
                        <Link
                            to={{
                                pathname: '/author',
                                search: `?id=${by}`,
                            }}
                            className='btn dark-btn btn-space'
                        >
                            {by}
                        </Link>
                    </h4>
                    <h4>
                        time { time }
                    </h4>
                    <h4>
                        comments { kids }
                    </h4>
                </div>
            )
        })
    )
}
