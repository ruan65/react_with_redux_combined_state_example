import React, { Component } from 'react';
import { connect } from 'react-redux'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { Action } from '../reducers/Reducers'

class Persons extends Component {
  
  personDeletedHandler = ( personId ) => {
    this.setState( ( prevState ) => {
      return { persons: prevState.persons.filter( person => person.id !== personId ) }
    } );
  }
  
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson}/>
        {this.props.personsList.map( person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovePerson( person.id )}/>
        ) )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    personsList: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: (name, age) => dispatch( { type: Action.ADD_PERSON, payload: {name: name, age: age}} ),
    onRemovePerson: ( personId ) => dispatch( { type: Action.REMOVE_PERSON, id: personId } )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)