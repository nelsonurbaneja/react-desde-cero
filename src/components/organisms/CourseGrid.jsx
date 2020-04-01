import React from 'react'
import CourseCard from '../molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ( {courses} ) =>  (
  <div className="ed-grid m-grid-4">
    {
      courses.map( curso =>
      <CourseCard key={curso.id}
          id={curso.id}
          title={curso.title}
          image={curso.image}
          price={curso.price}
          teacher={curso.teacher}
          teacherImage={curso.teacherImage}
      />
        )
    }
  </div>
)

export default withLoader("courses",CourseGrid)
