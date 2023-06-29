const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
  name: "app",
  initialState: {
    users: [],
    user: {},
  },
  reducers: {
    fetchUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action)=>{
        state.users = state.users.filter(user=>user.id!==action.payload)
    },
    fetchUser:(state, action)=>{
      let userObj = state.user;
      userObj[action.payload.id] = action.payload;
      state.user = userObj;
    }
  },
});

export const { fetchUsers, deleteUser, fetchUser } = appSlice.actions;
export default appSlice.reducer;
