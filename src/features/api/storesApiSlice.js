import { apiSlice } from "./apiSlice";

export const storesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStores: builder.query({
      query: () => '/stores',
    }),
  }),
});

export const { useGetStoresQuery } = storesApiSlice;
