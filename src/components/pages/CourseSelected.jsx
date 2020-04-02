import React, { Component } from 'react'
import CourseSelectedGrid from '../organisms/CourseSelectedGrid';
import withLogin from '../HOC/withLogin';


class CourseSelected extends Component { 
    constructor(props) {
        super(props)

        this.state = {
            cursoActual: [] //Declaro el estado, aqui sera guardado el curso que seleccione
        }
        //Le hago un bind a mi metodo getCourses que me hara la peticion fetch a mis cursos
        this.getCourses = this.getCourses.bind(this)
    }
    // Metodo que hace la peticion fetch a mis cursos
    getCourses = async () => {
        const response = await fetch('http://my-json-server.typicode.com/nelsonurbaneja/json-db/courses')
        const data = await response.json()

        //Aqui guardo en mi prop cursoActual el objeto JSON que me devuelva si el id de mi curso es igual al parametro que le estoy pasando
        this.setState({
            cursoActual: data.filter( curso => curso.id === parseInt(this.props.match.params.id))[0]
        })

    }
    render() {
        // Aqui le asigno el valor del estado de mi variable curso a {cursoActual}
        const {cursoActual} = this.state
        return <CourseSelectedGrid cursoActual={cursoActual} />

    }
    componentDidMount() {
        this.getCourses()
    }
}

export default withLogin(CourseSelected)

