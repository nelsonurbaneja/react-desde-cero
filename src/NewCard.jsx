import React from 'react'

const NewCard = ( {name, email, body} ) => (
    <div class="pricing-table l-block color-first">
        <header class="pricing-table__header center">
            <span class="pricing-table__title">
                { name }
            </span>
        </header>
        <div class="pricing-table__price center t3">
            { email }
        </div>
        <div class="pricing-table__description smaller center">
            { body }
        </div>
    </div>
)

export default NewCard;