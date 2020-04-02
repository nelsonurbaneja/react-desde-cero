import React, { Component }from 'react'
import CourseGrid from '../organisms/CourseGrid'
import withLogin from '../HOC/withLogin'

class Courses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }

        this.getCourses = this.getCourses.bind(this)
    }

    getCourses = async () => {
        const response = await fetch('http://my-json-server.typicode.com/nelsonurbaneja/json-db/courses')
        const data = await response.json()
        this.setState({
            courses: data
        })
    }
    render() {
        const {courses} = this.state
        return <CourseGrid courses={courses} />
    }

    componentDidMount() {
        this.getCourses()
    }
}


export default withLogin(Courses)