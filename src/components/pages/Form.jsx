import React, { useState, useEffect } from 'react'
import Banner from '../organisms/Banner'

const Form = () => { 

    const [person, setPerson] = useState({
        id: 1,
        name: 'Nelson',
        surname: 'Urbaneja',
        age: 22
    })
    const [robot, setRobot] = useState({
        id: 1,
        name: 'Wall-E',
        surname: '02-5JH',
        age: 756
    })

    useEffect( () => {
        console.log('Pagina cargada')
    }, [])

        const updateDates = (e) => {
            e.preventDefault()
            setPerson({
                ...person,
                id: 2,
                age: 23
            })
            setRobot({
                ...robot,
                id: 2,
                age: 757
            })
        }
        return (
            <>
                <Banner title={`Formulario de registro`} subtitle={`Tu futuro esta en tus manos`} link={`Ir`} />
                <form >
                    <div className="ed-container l-section l-90">
                        <div className="ed-item l-50 form__item">
                            <label htmlFor="name">Nombre de usuario</label>
                            <input 
                                type="text" 
                                id="name" 
                            />
                        </div>
                        <div className="ed-item l-50 form__item">
                            <label htmlFor="pass">Contraseña</label>
                            <input 
                                type="password" 
                                id="pass"
                            />
                        </div>
                            <input 
                                className="button full small" 
                                type="submit" 
                                value="Registrar"
                        />
                    </div>
                    <div className="ed-container l-90">
                        <div className="ed-item l-90 ">
                            <h1>Soy la persona {person.id}</h1>
                            <h2>nombre => { person.name }</h2>
                            <h2>apellido => { person.surname }</h2>
                            <h2>edad => { person.age } años </h2>
                        </div>
                        <div className="ed-item l-90 ">
                            <h1>Soy el robot {robot.id}</h1>
                            <h2>nombre => { robot.name }</h2>
                            <h2>apellido => { robot.surname }</h2>
                            <h2>edad => { robot.age } años </h2>
                        </div>
                    </div>  
                    <button onClick={ updateDates.bind(this) }>Mostrar nuevos</button>
                </form>
            </>
        )
    }

export default Form