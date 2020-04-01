import React from 'react'
import UserCard from '../molecules/UserCard'
import withLoader from '../HOC/withLoader'

const UserGrid = ( { users } ) => (
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
)

export default withLoader("users",UserGrid)