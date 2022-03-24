import React from 'react'

function List({people}) {
  return(
    <div>
      {people.map((person) => {
        const {id, name, age, image} = person
        return(
          <article key={id} className="person">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{age} years old</p>
          </article>
        )
    
      })}

    </div>

  )
  
}

export default List


