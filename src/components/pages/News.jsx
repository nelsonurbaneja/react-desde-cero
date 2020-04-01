import React, {Component} from 'react'
import NewGrid from '../organisms/NewGrid'

class News extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notices: []
        }

        this.getNews = this.getNews.bind(this)
    }

    getNews = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        this.setState({
            notices: data
        })
    }

    render() {
        const {notices} = this.state
        return (
            <>
            <h2 className="center title">Noticias</h2>
            <NewGrid notices={ notices }/>
            </>
        )
    }

    componentDidMount() {
        this.getNews()
    }
}

export default News