import React from 'react'
import Banner from '../organisms/Banner'
import NewGrid from '../organisms/NewGrid'
import useFetch from '../CustomHooks/useFetch'

const Form = () => { 

        const url = 'https://jsonplaceholder.typicode.com/comments'
        const noticias = useFetch(url, [])

        return (
            <>
                <Banner 
                    title={`Formulario de registro`} 
                    subtitle={`Tu futuro esta en tus manos`} 
                    link={`Ir`}
                />
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
                </form>
                <NewGrid notices={noticias.data} />
            </>
        )
    }

export default Form