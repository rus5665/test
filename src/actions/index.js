import {
  ADD_ITEM,
  ADD_COMMENT,
  REMOVE_ITEM,
} from '../constants'

export const addItem = (id, title) => {
  return {
    type: ADD_ITEM,
    id,
    title
  }
}

export const addComment = (id, comment) => {
  return {
    type: ADD_COMMENT,
    id,
    comment
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}