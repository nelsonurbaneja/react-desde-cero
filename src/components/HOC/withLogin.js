import React, {Component} from 'react'
const withLogin = (WrappedComponent) => {
  return class WithLogin extends Component {
    constructor(props) {
      super(props)

      //Creo en mi estado la propiedad loggued que simula con false un usuario NO-LOGUEADO
      this.state = {
        loggued: false
      }

      //bind a mi metodo validLoggued que cuando cargue la pag valida si esta Loggeado
      this.validLoggued = this.validLoggued.bind(this)
    }
    validLoggued() {
      const isLoggued = Math.round(Math.random()) //isLoggued obtiene un numero random de 0-1
      console.log(isLoggued)
      this.setState({
        loggued : 1 // a mi estado de la prop loggued le asigno el valor de isLoggued si es uno. esta loggueado y puedo ver las paginas si es 0 no puedo
      })
    }
    render() {
      return this.state.loggued
      ? <WrappedComponent {...this.props}/>
      : <h2>Debe logguearse para ver este contenido</h2>
    }

    componentDidMount() {
      this.validLoggued()
    }
  }
}

export default withLogin