import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:null,
  email:null,
  message:null,
  value: false,
}

export const sendMessage = createSlice({
  name: 'sendMess',
  initialState,
  reducers: {
    send: (state) => {
      state.name && state.email && state.message ? state.value = true :state.value = false
    },
    setName: (state,action)=>{
      state.name = action.payload
    },
    setEmail: (state,action)=>{
      state.email = action.payload
    },
    setMessage: (state,action)=>{
      state.message = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { send, setName, setEmail, setMessage } = sendMessage.actions

export default sendMessage.reducer