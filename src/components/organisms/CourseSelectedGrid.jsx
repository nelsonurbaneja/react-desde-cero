import React from 'react'
import CourseSelectedCard from '../molecules/CourseSelectedCard'
import withComponentsExist from '../HOC/withComponentsExist'

const CourseSelectedGrid = ( { cursoActual } ) => (
    <div className="ed-grid m-grid-2 grid-courses">
        <h4 className="t4">
            <p>Bienvenido al curso de { cursoActual.title } que sera impartido por el profesor: { cursoActual.teacher } Disfrutalo!</p>
            <div className="center">
                <h5>Opinion sobre el curso - {cursoActual.title}</h5>
                <input type="text"/>
                <button className="button full btn">Comentar</button>
            </div>
            <div>
                <ul className="feature-list comments">
                    <li className="data-list">Comment 1</li>
                    <li className="data-list">Comment 2</li>
                    <li className="data-list">Comment 3</li>
                    <li className="data-list">Comment 4</li>
                </ul>
            </div>
        </h4>
        <CourseSelectedCard
            title={cursoActual.title}
            image={cursoActual.image}
            teacher={cursoActual.teacher}
        />
    </div>

)

export default withComponentsExist("cursoActual",CourseSelectedGrid) 
