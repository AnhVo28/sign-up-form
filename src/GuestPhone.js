import React from 'react';


const GuestPhone = props => {
  if (props.isEditing) {
    return(
      <input type='text' value ={props.children}
        onChange={props.handlePhoneEdits} />
    )
  }
  return (
    <span> {props.children} </span>
  )
}



export default GuestPhone;
