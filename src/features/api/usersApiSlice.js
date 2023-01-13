import { apiSlice } from "./apiSlice";

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "POST",
        body: userInfo,
      }),
    }),
    updateUser: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "PATCH",
        body: userInfo,
      }),
    })
  }),
});

export default usersApiSlice;

export const { useCreateUserMutation, useUpdateUserMutation } = usersApiSlice;
