import { configureStore } from '@reduxjs/toolkit'
import  mosoblReducer  from './mosoblSlice'

export const store = configureStore({
  reducer: {
    mosobl: mosoblReducer
  },
})