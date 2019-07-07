import React, {Component} from 'react';

const Context = React.createContext();

const reducer = ( state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state, 
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
        
      case 'ADD_CONTACT':
          return {
              ...state, 
              contacts: [action.payload, 
                ...state.contacts]
          };
      default:
           return state;
  }
}

export class Provider extends Component {
    state = {
        contacts: [
          {
            id: 1,
            name: "John Cena",
            email: "johncena@gamil.com",
            phone: 5555555555
          },
          {
            id: 2,
            name: "The Rock",
            email: "trock@gamil.com",
            phone: 5555555556
          },
          {
            id: 3,
            name: "Henry Johnson",
            email: "hjohnson@gamil.com",
            phone: 5555555557
          }
        ],
        dispatch: action => this.setState(state =>
        reducer(state, action))

      };


render(){
    return(
        <Context.Provider value = {this.state}>
            {this.props.children}
        </Context.Provider>
    )
}
}

export const Consumer = Context.Consumer;