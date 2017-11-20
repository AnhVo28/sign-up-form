import React from 'react';
import Guest from './Guest.js'

const GuestList = props =>

  <table className="info">

    <thead>
      <tr >
        <th className ="sort t-header" onClick = {props.toogleSortAt}><span>Name</span> {
            props.isSorted? <i class="fa fa-arrow-up" aria-hidden="true"></i>
              :
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
          } </th>
        <th className ="t-header" >Email address</th>
        <th className ="t-header" >Phone number</th>
      </tr>
    </thead>
    <tbody>
      { props.guests.map((guest, index)=>
        <Guest  key ={index}
                name = {guest.name}
                phone={guest.phone}
                email={guest.email}
                isEditing={guest.isEditing}
                handleToogleEditing={()=> props.toogleEditingAt(index)}
                setName={text => props.setNameAt(text, index)}
                setEmail={text => props.setEmailAt(text, index)}
                setPhone={text => props.setPhoneAt(text, index)}
                handleDeleteGuest = {()=>props.deleteGuestAt(index)}
                handleCancel={()=> props.cancleAt(index)}
                 />
    )}
    </tbody>
  </table>;



export default GuestList;
