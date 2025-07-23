
import { createSlice,  } from '@reduxjs/toolkit';
import type { UserResponseType } from '../../page/user/UserInterface';
import type { CourierResponseType } from '../../page/corurier/CourierInterface';
import type { AdminResponseType } from '../../page/admin/AdminInterface';
import type { PayloadAction } from '@reduxjs/toolkit';

type UserType = UserResponseType | CourierResponseType | AdminResponseType | null;

interface AuthState {
  user: UserType;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("geste") || "null"),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
      if (action.payload) {
        localStorage.setItem("geste", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("geste");
      }
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("geste");
    }
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
