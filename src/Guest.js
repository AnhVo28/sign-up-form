import React from 'react';
import GuestName from './GuestName.js'
import GuestEmail from './GuestEmail.js'
import GuestPhone from './GuestPhone.js'

const Guest = props =>

      <tr >
        <td className = "col1 name">
          <GuestName isEditing={props.isEditing} handleNameEdits={e => props.setName(e.target.value) } >{props.name}</GuestName>
        </td>
        <td className = "col2">
          <GuestEmail isEditing={props.isEditing}  handleEmailEdits={e => props.setEmail(e.target.value) } >{props.email}</GuestEmail>
        </td>
        <td className = "col3">
          <GuestPhone isEditing={props.isEditing}  handlePhoneEdits={e => props.setPhone(e.target.value) } >{props.phone}</GuestPhone>
        </td>
        <td className = "col4">
        {
          props.isEditing?
          <div className = "flex">
              <button className="cancel" onClick={props.handleCancel}>Cancel</button>
              <button className="save" onClick={props.handleToogleEditing} >Save</button>
          </div>

              :
              <div className="icon">
            <i onClick={props.handleToogleEditing} className="fa fa-pencil" aria-hidden="true"></i>
            <i onClick={props.handleDeleteGuest} className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
        }

        </td>
      </tr>;

export default Guest;
