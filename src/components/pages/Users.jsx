import React, {Component} from 'react'
import UserCard from '../molecules/UserCard'

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [] //Declaro un arreglo vacio vacio donde metere mis objetos con los user
        }

        // Le hago un bind al metodo de obtener usuarios por fetch
        this.getUser = this.getUser.bind(this)
    }

    getUser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.setState({
            users: data //En mi arreglo users meto todos mis objetos obtenidos de la peticion
        })
    }
    render() {
        const {users} = this.state
        return (
            <>
            <h2 className="center title">Usuarios</h2>
            <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
                {
                    users.map(user => 
                    <UserCard key={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                    />
                ) 
                }
            </div>
            </>
        )
    }

    componentDidMount() {
        this.getUser()
    }
}

export default Users