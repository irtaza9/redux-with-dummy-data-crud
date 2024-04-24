import { createSlice } from '@reduxjs/toolkit'
import { dummydata } from '../../constants/types'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: dummydata,
  reducers: {
    postUser: (state, action) => {
      console.log(action.payload)
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email, phone } = action.payload
      const existingUser = state.find(post => post.id === parseInt(id))
      if (existingUser) {
        existingUser.name = name
        existingUser.email = email
        existingUser.phone = phone
      }
    }
  },
})

export const { postUser, editUser } = userSlice.actions

export default userSlice.reducer
