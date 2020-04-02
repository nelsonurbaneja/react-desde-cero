import React from 'react'
import CourseExistCard from './CourseExistCard'

const CourseExistGrid = ( { cursoActual } ) => (
  cursoActual 
  ? <div className="ed-grid m-grid-2">
          <h3>
              Bienvenido al curso de { cursoActual.title } que sera impartido por el profesor: { cursoActual.teacher } Disfrutalo!
          </h3>
          <CourseExistCard
              title={cursoActual.title}
              image={cursoActual.image}
              teacher={cursoActual.teacher}
          />
    </div>
  : <h2> Disculpe, el curso que esta buscando no existe.</h2>
)

export default CourseExistGrid