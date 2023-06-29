const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
  name: "app",
  initialState: {
    users: [],
  },
  reducers: {
    fetchUsers: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action)=>{
        state.users = state.users.filter(user=>user.id!==action.payload)
    }
  },
});

export const { fetchUsers, deleteUser } = appSlice.actions;
export default appSlice.reducer;
