
var defaultState = [{
  _id: 322,
  text: 'test'
}]

module.exports = (state=defaultState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.newTodo
      ]
    case 'REMOVE_TODO':
      return state.filter((todo) => {
        if (todo._id === action.id) {
          return false
        } else {
          return true
        }
      })
    default:
      return state
  }
}
