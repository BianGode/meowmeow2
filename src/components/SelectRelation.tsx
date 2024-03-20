import React from 'react'
import '../styles/selectRelation.css'
// get list of all cats(own and other users) and if too many(30) then load more
// Also a search functionality
// if the cat is in users own family than show on top 

export default function SelectRelation() {
  return (
    <div className='setRelationWrap'>
      <div className='selects'>
        <select>
          <option value="Mother-of">Mother of</option>
          <option value="Father-of">Father of</option>
          <option value="Daughter-of">Daughter of</option>
          <option value="Son-of">Son of</option>
          <option value="Brother-of">Brother of</option>
          <option value="Sister-of">Sister of</option>
          <option value="Grandpa-of">Grandpa of</option>
          <option value="Grandma-of">Grandma of</option>
          <option value="Aunt-of">Aunt of</option>
          <option value="Uncle-of">Uncle of</option>
          <option value="Niece-of">Niece-of</option>
          <option value="Nephew-of">Nephew-of</option>
        </select>
        {/* // get list of all cats(own and other users) and if too many(30) then load more */}
        {/* // Also a search functionality */}
        {/* // if the cat is in users own family than show on top  */}
        <select></select>
      </div>
      <button className='btn add'>+</button>
      <button className='btn done'>Done</button>
    </div>
  )
}
