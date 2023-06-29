const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
  name: "app",
  initialState: {
    users: [],
    user: null,
  },
  reducers: {
    fetchUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action)=>{
        state.users = state.users.filter(user=>user.id!==action.payload)
    },
    fetchUser:(state, action)=>{
      state.user = action.payload
    }
  },
});

export const { fetchUsers, deleteUser, fetchUser } = appSlice.actions;
export default appSlice.reducer;
