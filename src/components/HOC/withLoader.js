import React, {Component} from 'react'

const withLoader = (PropValue, WrappedComponent) => {
  return class WithLoader extends Component {
        constructor(props) {
          super(props)
        }
        render() {
          return this.props[PropValue].length === 0
          ? <h2>Cargando... Por favor espere.</h2>
          : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader