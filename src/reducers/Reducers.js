export const Action = {
  ADD_PERSON: 'ADD_PERSON',
  REMOVE_PERSON: 'REMOVE_PERSON'
}

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case Action.ADD_PERSON:
      
      return {persons: [...state.persons, {
          id: Math.random(), // not really unique but good enough here!
          name: action.payload.name,
          age: action.payload.age
        }]}
    
    case Action.REMOVE_PERSON:
      
      return {persons: state.persons.filter(p => p.id !== action.id)}
    
    default:
      return state
  }
}

export default reducer