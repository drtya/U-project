import { configureStore } from '@reduxjs/toolkit'
import sendMessage from './states/sendMessage'

export const store = configureStore({
  reducer: {
    sendMess: sendMessage
  },
})