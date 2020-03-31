import React, {Component} from 'react'
import NewCard from './NewCard'
import Menu from './Menu'

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
            <div className="ed-grid m-grid-2">
                {
                    notices.map(notice =>
                        <NewCard
                            name={notice.name}
                            email={notice.email}
                            body={notice.body}
                        />
                    )  
                }
            </div>
            <Menu/>
            </>
        )
    }

    componentDidMount() {
        this.getNews()
    }
}

export default News