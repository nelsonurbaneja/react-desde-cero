import React from 'react'
import CourseSelectedCard from '../molecules/CourseSelectedCard'
import withComponentsExist from '../HOC/withComponentsExist'

const CourseSelectedGrid = ( { cursoActual } ) => (
    <div className="ed-grid m-grid-2">
        <h3 className="t3">
            Bienvenido al curso de { cursoActual.title } que sera impartido por el profesor: { cursoActual.teacher } Disfrutalo!
        </h3>
        <CourseSelectedCard
            title={cursoActual.title}
            image={cursoActual.image}
            teacher={cursoActual.teacher}
        />
    </div>

)

export default withComponentsExist("cursoActual",CourseSelectedGrid) 
