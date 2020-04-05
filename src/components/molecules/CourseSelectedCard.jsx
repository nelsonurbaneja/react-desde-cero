import React from 'react'

const CourseSelectedCard = ({title,image,teacher}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={ image } alt={ title } /> 
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                { title }
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                <span className="small">{ teacher }</span>
            </div>
            </div>
        </div>
    </article>
)

export default CourseSelectedCard