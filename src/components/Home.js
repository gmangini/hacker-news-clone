import React from 'react'
import { getNewsStoryData } from '../utils/api'
import StoryDisplay from './StoryDisplay'

export default class Home extends React.Component {
    state = {
        storyType: 'topstories',
        stories: {},
        error: null
    }

    componentDidMount() {
        getNewsStoryData('topstories', 30)
            .then((data) =>
                this.setState({
                    stories: data
                })
            )
            .catch(() => {
                this.setState({
                    error: 'Error fetching stories'
                })
            })
    }

    render() {
        const { stories } = this.state
        return (
            <React.Fragment>
                <StoryDisplay stories = {stories} />
            </React.Fragment>
        )
    }
}