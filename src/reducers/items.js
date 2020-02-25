import {
  ADD_ITEM,
  ADD_COMMENT,
  REMOVE_ITEM,
} from '../constants'

const items = (state = [], { type, id, title, comment }) => {
  switch (type) {
    case ADD_ITEM:
      return [
        ...state, {
          id: id,
          title: title,
          comments: []
        }
      ]
    case ADD_COMMENT:
      return [...state].map(items => {
        console.log('URA', id, comment)
        if (items.id === id) {
          items.comments.push(comment)
        }
        return items
      })
    case REMOVE_ITEM:
      return [...state].filter(items => items.id !== id)
    default:
      return state
  }
}

export default items