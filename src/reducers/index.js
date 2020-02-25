import { combineReducers } from 'redux'
import items from './items'

export const initialState = {
  items: [],
}

export const rootReducer = combineReducers({
  items
})
