import React from 'react';


const GuestEmail = props => {
  if (props.isEditing) {
    return(
      <input type='text' value ={props.children}
        onChange={props.handleEmailEdits}  />
    )
  }
  return (
    <span> {props.children} </span>
  )
}



export default GuestEmail;
