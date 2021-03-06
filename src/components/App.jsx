import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Courses from './pages/Courses'
import CourseSelected from './pages/CourseSelected'
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
        <Route path="/registro" component={ Form } />
        <Route path="/cursos/:idName" component={ CourseSelected } />
        <Route path="/historial/" component={ History } />
        <Route path="/cursos" component={ Courses } />
        <Route path="/usuarios" component={ Users } />
        <Route path="/noticias" component={ News } />
        <Route component={ CuatroCeroCuatro } />
    </Switch>                                                
  </Router>
)

export default App
