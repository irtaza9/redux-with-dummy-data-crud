import { createSlice } from '@reduxjs/toolkit'
import { dummydata } from '../../constants/types'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState:{
    contacts: dummydata,
    selectedContacts:[],
  },  
  reducers: {
    //getcontact
    postUser: (state, action) => {
      console.log(action.payload)
      state.push(action.payload);
    },
    //update contact
    editUser: (state, action) => {
      const { id, name, email, phone } = action.payload
      const existingUser = state.find(post => post.id === parseInt(id))
      if (existingUser) {
        existingUser.name = name
        existingUser.email = email
        existingUser.phone = phone
      }
    },
    //delete contact
    deleteUser: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(user => user.id !== parseInt(idToDelete));
    },
    selectContact:(state,action)=>{
    const contactId=action.payload;
    const alreadySelected=state.selectedContacts.includes(contactId);
    if(alreadySelected){
      state.selectedContacts=state.selectedContacts.filter(
        (id)=>id !== contactId        
      );
    }
      else{
        state.selectedContacts.push(contactId);
      }
    }
  },
  selectAllContacts:(state)=>
  {
    if(state.selectedContacts.length===state.contacts.length){
      state.selectedContacts=[]; //disselect all
    }else{
      state.selectedContacts=state.contacts.map((contact)=>contact.id); //select all
    }
  },  
});

export const { postUser, editUser, deleteUser, selectAllContacts, selectContact} = userSlice.actions

export default userSlice.reducer
