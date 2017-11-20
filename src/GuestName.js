import React from 'react';


const GuestName = props => {
  if (props.isEditing) {
    return(
      <input type='text'
              value ={props.children}
              onChange={props.handleNameEdits}  />
    )
  }
  return (
    <span> {props.children} </span>
  )
}



export default GuestName;
