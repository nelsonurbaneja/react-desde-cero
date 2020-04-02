import React, {Component} from 'react'

const withComponentsExist = (PropsCursoActual,WrappedComponent) => {
  return class WithComponentsExist extends Component {

    render() {
      return this.props[PropsCursoActual] 
      ? <WrappedComponent  {... this.pros}/>
      : <h2> Disculpe, el curso que esta buscando no existe ok.</h2>
    }
  }
}

export default withComponentsExist
