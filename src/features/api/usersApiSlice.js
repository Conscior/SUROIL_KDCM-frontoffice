import { apiSlice } from "./apiSlice";

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "POST",
        body: { ...userInfo },
      }),
    }),
  }),
});

export default usersApiSlice;

export const { useCreateUserMutation } = usersApiSlice;
