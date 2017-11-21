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
      guests:
        [{"name":"Sisely Josefer","email":"sjosefer0@comsenz.com","phone":"446-428-4124"},
{"name":"Rosaleen Husselbee","email":"rhusselbee1@indiegogo.com","phone":"649-813-5007"},
{"name":"Gilberta Capner","email":"gcapner2@globo.com","phone":"455-592-6870"},
{"name":"Kerry Dales","email":"kdales3@simplemachines.org","phone":"574-207-0912"},
{"name":"Clarisse Smullin","email":"csmullin4@elpais.com","phone":"407-266-0391"},
{"name":"Candie Gunney","email":"cgunney5@weebly.com","phone":"856-351-9364"},
{"name":"Darin Sangar","email":"dsangar6@springer.com","phone":"305-274-2871"},
{"name":"Juanita Townsend","email":"jtownsend7@tmall.com","phone":"916-421-0245"},
{"name":"Ruthi Mankor","email":"rmankor8@elpais.com","phone":"451-823-0465"},
{"name":"Burr Apedaile","email":"bapedaile9@topsy.com","phone":"205-535-4588"},
{"name":"Caleb Nehl","email":"cnehla@weather.com","phone":"524-910-4630"},
{"name":"Guillermo Wither","email":"gwitherb@arstechnica.com","phone":"868-712-4496"},
{"name":"Chase Giral","email":"cgiralc@ca.gov","phone":"732-399-3083"},
{"name":"Del Halms","email":"dhalmsd@simplemachines.org","phone":"377-748-0808"},
{"name":"Dov Curmi","email":"dcurmie@cdbaby.com","phone":"911-476-1891"},
{"name":"Erinn Freebury","email":"efreeburyf@google.co.uk","phone":"864-883-6437"},
{"name":"Rudie Dronsfield","email":"rdronsfieldg@tinyurl.com","phone":"809-628-6926"},
{"name":"Justine Ofer","email":"joferh@list-manage.com","phone":"272-959-9065"},
{"name":"Barclay Sothcott","email":"bsothcotti@desdev.cn","phone":"812-694-3149"},
{"name":"Ryley Abramin","email":"rabraminj@patch.com","phone":"597-464-7030"}]
      
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

      // this.setState({
      //   guests: this.state.guests.map((guest, index)=>{
      //     if (index === indexToChange) {
      //       console.log(this.baseState.guests[indexToChange]);
      //       return this.baseState.guests[indexToChange]
      //     }
      //     return guest;
      //   })
      // })
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
