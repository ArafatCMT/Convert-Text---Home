import React from 'react'

function Alart(props) {
    const Capitalize = (word) =>{
        let newWord = word.toLowerCase()
        return newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }
  return (
    props.alart && <div className={`alert alert-${props.alart.type} d-flex align-items-center mt-2`}  role="alert">
        <strong>{Capitalize(props.alart.type)}</strong> : {props.alart.msg}
    </div>
  )
}

export default Alart;
