import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
