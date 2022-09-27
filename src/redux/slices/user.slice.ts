import { User, UserEmptyState } from '@/models';
import { clearLocalStorage, persistLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

export const userKey = 'user'
export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string ) : UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<User>(userKey, action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<User>(userKey, result);
      return result
    },
    resetUser: () => {
      clearLocalStorage(userKey)
      return UserEmptyState
    }
  }
});

// Action creators are generated for each case reducer function
export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;