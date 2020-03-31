import React, {Component} from 'react'
import Banner from '../organisms/Banner'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            pass: '',
        }

        this.changeName = this.changeName.bind(this)
        this.changePass = this.changePass.bind(this)
    }   

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changePass(e) {
        this.setState({
            pass: e.target.value
        })
    }


    render() {
        return (
            <>
            <Banner title={`Formulario`} subtitle={`Tu futuro esta en tus manos`} link={`Ir`} />
            <form>
                <div className="ed-container l-section l-90">
                    <div className="ed-item l-50 form__item">
                        <label htmlFor="name">Nombre de usuario</label>
                        <input 
                            type="text" 
                            id="name" 
                            onChange = { this.changeName }
                        />
                    </div>
                    <div className="ed-item l-50 form__item">
                        <label htmlFor="pass">Contraseña</label>
                        <input 
                            type="password" 
                            id="pass"
                            onChange = { this.changePass }
                        />
                    </div>
                        <input 
                            className="button full small" 
                            type="submit" 
                            value="Enviar"
                    />
                </div>
                <div className="ed-container l-90">
                    <div className="ed-item l-90 ">
                        <h2>Hola {this.state.name}, tu Contraseña es {this.state.pass}</h2>
                    </div>
                </div>  
            </form>
        </>
        )
    }
    componentDidMount() {
        console.log('cargado')
    }
    componentDidUpdate(prevProps,prevState) {
        // console.log(prevProps) 
        // console.log(prevState)
    }
    
}

export default Form;