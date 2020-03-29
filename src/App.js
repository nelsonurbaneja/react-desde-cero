import React from 'react';
import Curso from './Curso';
import './style/style.scss';

const cursos = [
  {
      title: 'React desde cero',
      image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
      price: "20 USD",
      teacher: "Nelson Urbaneja",
      teacherImage: "https://avatars2.githubusercontent.com/u/56278219?s=460&u=357271b2be844e35c0a60592aa03cb932765daa5&v=4"
  },
  {
      title: 'Manejo del estado de la aplicación',
      image: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png",
      price: "35 USD",
      teacher: "Nelson Urbaneja",
      teacherImage: "https://avatars2.githubusercontent.com/u/56278219?s=460&u=357271b2be844e35c0a60592aa03cb932765daa5&v=4"
  },
  {
      title: 'Plataforma de educación online con React.js',
      image: "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20plataforma%20de%20cursos.png",
      price: "50 USD",
      teacher: "Nelson Urbaneja",
      teacherImage: "https://avatars2.githubusercontent.com/u/56278219?s=460&u=357271b2be844e35c0a60592aa03cb932765daa5&v=4"
  },
]

const ComponentSaludo = () => (
  <>
    <div className="main-banner img-container l-section diagonal" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Post del banner" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner </p>
            <p> Subtítulo del banner</p>
            <a href="https://ed.team" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {
        cursos.map( curso => 
            <Curso 
              title={curso.title}
              image={curso.image}
              price={curso.price}
              teacher={curso.teacher}
              teacherImage={curso.teacherImage}
            />
        )
      }
    </div>
  </>
)

export default ComponentSaludo;
