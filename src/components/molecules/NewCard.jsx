import React from 'react'

const NewCard = ( {name, email, body} ) => (
    <div className="pricing-table l-block color-first">
        <header className="pricing-table__header center">
            <span className="pricing-table__title">
                { name }
            </span>
        </header>
        <div className="pricing-table__price center t3">
            { email }
        </div>
        <div className="pricing-table__description smaller center">
            { body }
        </div>
    </div>
)

export default NewCard;