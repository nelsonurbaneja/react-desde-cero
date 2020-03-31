import React from 'react'

const History = ( {match, location, history}) => (
    <div className="ed-grid">
        {
            JSON.stringify(history)
        }
    </div>
)
export default History