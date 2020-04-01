import React from 'react'
import NewCard from '../molecules/NewCard'
import withLoader from '../HOC/withLoader'

const NewGrid = ( { notices } ) => (
  <div className="ed-grid m-grid-2">
    {
        notices.map(notice =>
            <NewCard
                key={notice.id}
                name={notice.name}
                email={notice.email}
                body={notice.body}
            />
        )  
    }
  </div>
)

export default withLoader("notices",NewGrid)