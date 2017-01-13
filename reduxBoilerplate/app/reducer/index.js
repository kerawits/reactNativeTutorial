import uuid from 'uuid'

module.exports = (state, action) => {
  switch(action.type) {
    // case 'ADD_TODO':
    //   var newTodos = [
    //     ...state.todos,
    //     {
    //       text: action.text,
    //       id: uuid.v4()
    //     }
    //   ]
    //   return {
    //     todos: newTodos
    //   }
    default:
      return state
  }
}
