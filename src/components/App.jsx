import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CourseGrid from './pages/CourseGrid'
import Course from './molecules/Course'
import Home from './pages/Home'
import Form from './pages/Form'
import CuatroCeroCuatro from './pages/CuatroCeroCuatro'
import Header from './organisms/Header'
import History from './pages/History'
import Users from './pages/Users'
import News from './pages/News'
import '../style/style.scss'


const App = () => (
  <Router>
    <Header/>
    <Switch>
        <Route path="/" exact component={ Home } />
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
