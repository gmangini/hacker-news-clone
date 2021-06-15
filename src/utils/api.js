import { url } from './constants'

export function getNewsStories(category, numStories) {
    const endpoint = window.encodeURI(`${url}${category}.json`)

    return fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
            if (!data) {
                throw new Error(data.message)
            }
            return Promise.all(data.slice(0, numStories).map(getStory))
        })
}

function getStory(id) {
    const endpoint = window.encodeURI(`${url}item/${id}.json?print=pretty`)

    return fetch(endpoint)
        .then((response) => response.json())
        .then((story) => {
            return story
        })
}

export function getAuthor(user) {
    // returns author data Object
    const endpoint = window.encodeURI(`${url}user/${user}.json?print=pretty`)

    return fetch(endpoint)
        .then((response) => response.json())
        .then((author) => {
            author.created = convertTime(author.created)
            return author
        })
}

function convertTime(inTime) {

    let unixTime = inTime * 1000
    let date = new Date(unixTime).toLocaleDateString('en-US')
    let time = new Date(unixTime).toLocaleTimeString('en-US')
    return `${date}, ${time}`
}

export function getNewsStoryData(category, numStories) {

    // converts object of objects into array of objects
    // then will change values for author, time, comments

    return getNewsStories(category, numStories)
        .then((stories) => Object.values(stories))
        
        .then((storyObj) => {
            
            for (let index in storyObj) {
                storyObj[index].time = convertTime(storyObj[index].time)
            }
           
            return storyObj
        })
}
