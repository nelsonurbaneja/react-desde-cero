import React, {Component} from 'react'

const withComponentsExist = (PropsValue,WrappedComponent) => {
  return class WithComponentsExist extends Component {

    render() {
      console.log(this.props)
      return this.props[PropsValue] === undefined
      ? <h2>Disulpe, lo que intenta buscar no existe</h2>
      : <WrappedComponent  {...this.props}/>
    }
  }
}

export default withComponentsExist
