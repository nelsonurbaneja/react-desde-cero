import React from 'react'
import CourseGrid from './CourseGrid'
import Course from './Course'
import Banner from './Banner'
import Form from './Form'
import CuatroCeroCuatro from './CuatroCeroCuatro'
import Header from './Header'
import History from '././History'
import Users from './Users'
import News from './News'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './style/style.scss'


const App = () => (
  <Router>
    <Header/>
    <Switch>
        <Route path="/" exact component={ () => <Banner title={`Bienvenido a Desarrollo web`} subtitle={`Tu futuro esta en tus manos`} link={`Saber más`}/> } />
        <Route path="/formulario" component={ Form } />
        <Route path="/cursos/:id" component={ Course } />
        <Route path="/historial/" component={ History } />
        <Route path="/cursos" component={ CourseGrid } />
        <Route path="/usuarios" component={ Users } />
        <Route path="/noticias" component={ News } />
        <Route component={ CuatroCeroCuatro } />
    </Switch>                                                
  </Router>
)

export default App
