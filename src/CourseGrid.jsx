import React from 'react'
import CourseCard from './CourseCard'

const courses = [
    {
        id: 1,
        title: 'Curso React desde cero 2020',
        image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        price: "20 USD",
        teacher: "Nelson Urbaneja",
        teacherImage: "https://avatars2.githubusercontent.com/u/56278219?s=460&u=357271b2be844e35c0a60592aa03cb932765daa5&v=4"
    },
    {
        id: 2,
        title: 'Programación reactiva con RxJS',
        image: "https://res.cloudinary.com/edteam/image/upload/v1581437964/rxjs-poster-_v3.png",
        price: "20 USD",
        teacher: "Jorge Cano",
        teacherImage: "https://avatars3.githubusercontent.com/u/5982204?v=4"
    },
    {
        id: 3,
        title: 'Manejo del estado de la aplicación',
        image: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
        price: "35 USD",
        teacher: "Nelson Urbaneja",
        teacherImage: "https://avatars2.githubusercontent.com/u/56278219?s=460&u=357271b2be844e35c0a60592aa03cb932765daa5&v=4"
    },
    {
        id: 4,
        title: 'Programación orientada a objetos con JavaScript',
        image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/js-poo.png",
        price: "14 USD",
        teacher: "Beto Quiroga",
        teacherImage: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    }
]

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {
            courses.map( curso =>
            <CourseCard
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
export default CourseGrid