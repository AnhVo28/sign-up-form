import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import GuestList from './GuestList.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isSorted: true,
      guestAdd: {
        name: '',
        email: '',
        phone: '',
        isEditing: false
      },
      guests: [
        {
          name: 'Treasure',
          email: 'Treasure@gmail.com',
          phone: '0469651192',
          isEditing: false
        },

        {
          name: 'John',
          email: 'John@gmail.com',
          phone: '0469648342',
          isEditing: false
        },
        {
          name: 'Nick',
          email: 'nick@gmail.com',
          phone: '0469551192',
          isEditing: false
        }
      ]
    }
    // preserve the initial state in a new object
    this.baseState = this.state
  }





  toogleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index)=>{
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    })
  }

  toogleEditingAt = index =>
    this.toogleGuestPropertyAt('isEditing', index);

  toogleSortAt = () => {
    this.setState({
      isSorted: !this.state.isSorted
    })

    if (!this.state.isSorted) {

      this.setState({

        guests: this.state.guests.sort((a,b)=>{
          let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
          if (nameA < nameB) //sort string ascending
          return -1;
          if (nameA > nameB)
          return 1;
          return 0; //default return value (no sorting)
        })


      })
    } else {
      this.setState({

        guests: this.state.guests.sort((a,b)=>{
          let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
          if (nameA < nameB) //sort string decending
          return 1;
          if (nameA > nameB)
          return -1;
          return 0; //default return value (no sorting)
        })


      })
    }

  }

    setNameAt = (name, indexToChange) => {
      this.setState({
        guests: this.state.guests.map((guest, index)=>{
          if (index === indexToChange) {
            return {
              ...guest,
              name
            };
          }
          return guest;
        })
      })
    }

    cancleAt = (indexToChange) => {

      this.setState({
        guests: this.state.guests.map((guest, index)=>{
          if (index === indexToChange) {
            console.log(this.baseState.guests[indexToChange]);
            return this.baseState.guests[indexToChange]
          }
          return guest;
        })
      })
      this.toogleGuestPropertyAt('isEditing', indexToChange);
    }

    setEmailAt = (email, indexToChange) => {
      this.setState({
        guests: this.state.guests.map((guest, index)=>{
          if (index === indexToChange) {
            return {
              ...guest,
              email
            };
          }
          return guest;
        })
      })
    }

    setPhoneAt = (phone, indexToChange) => {
      this.setState({
        guests: this.state.guests.map((guest, index)=>{
          if (index === indexToChange) {
            return {
              ...guest,
              phone
            };
          }
          return guest;
        })
      })
    }





    handleNameInput = e => {
      this.handlePropertyInput('name',e)
    };

    handleEmailInput = e => {
      this.handlePropertyInput('email', e)
    };

    handlePhoneInput = e => {
      this.handlePropertyInput('phone', e)
    };


    handlePropertyInput = (property, e) => {
      this.setState({
        guestAdd: {
          ...this.state.guestAdd,
          [property]: e.target.value
        }
      })
    }



    newGuestAdd = e => {

      e.preventDefault();
      this.setState({
        guests: [
          this.state.guestAdd,
          ...this.state.guests
        ],
        guestAdd: {
          name: '',
          email: '',
          phone: '',
          isEditing: false
        }
      })
    }

    deleteGuestAt= index => {
          this.setState({
            guests: [
              ...this.state.guests.slice(0,index),
              ...this.state.guests.slice(index+1)
            ]
          })
    }

  render() {
    return (
      <div className="App">
        <div className="wrap">
          <header>
              <img src={logo} alt=""/>
          </header>
          <div className="section">
            <div className="b-wrap">

              <h3>List of participants</h3>

                <form onSubmit={this.newGuestAdd} className="action-form" >

                  <table class="form-fill">
                    <tr>

                      <td className = "col1"><input onChange={this.handleNameInput} type="text" name="name" value={this.state.guestAdd.name} placeholder="Full name"/></td>
                      <td className = "col2"><input onChange={this.handleEmailInput} type="email" name="email" value={this.state.guestAdd.email} placeholder= "E-mail address" /></td>
                      <td className = "col3"><input onChange={this.handlePhoneInput} type="text" name="number" value={this.state.guestAdd.phone}  placeholder= "Phone number" /></td>
                      <td className = "col4"><button onClick={this.newGuestAdd} type="submit" name="button" >Add new</button></td>

                    </tr>

                  </table>
                </form>

                <GuestList  guests = {this.state.guests}
                            toogleEditingAt = {this.toogleEditingAt}
                            setNameAt= {this.setNameAt}
                            toogleCancle={this.toogleCancle}
                            setPhoneAt = {this.setPhoneAt}
                            setEmailAt = {this.setEmailAt}
                            deleteGuestAt = {this.deleteGuestAt}
                            cancleAt = {this.cancleAt}
                            toogleSortAt={this.toogleSortAt}
                            isSorted = {this.state.isSorted}
                            />
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
