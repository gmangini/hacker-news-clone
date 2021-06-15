import React from 'react'
import { getAuthor } from '../utils/api'
import queryString from 'query-string'
import StoryDisplay from './StoryDisplay'

export default class Author extends React.Component {

    state = {
        authorDetails: {},
        error: null
    }

    componentDidMount() {
        let user = queryString.parse(this.props.location.search)
        getAuthor(user.id)
            .then((authObj) => {
                this.setState({
                    authorDetails: authObj
                })
            })
            .catch(() => {
                this.setState({
                    error: 'Error fetching author'
                })
            })
    }

    render() {
        const {authorDetails, error} = this.state
        const { about, created, id, karma, submitted } = authorDetails
        console.log('type of submmited ' + typeof(submitted))
        console.log('type of created ' + typeof(created))

        return (
            <React.Fragment>
                <div><h2>{id}</h2></div>
                <div>
                    joined {created} has {karma} karma
                </div>
                <div>
                    <h2>About</h2>
                    {about}
                </div>
                <div>
                    <h2>Posts</h2>
                </div>
            </React.Fragment>
        )
    }
}