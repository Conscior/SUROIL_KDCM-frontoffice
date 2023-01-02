import { apiSlice } from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
    }),
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/orders",
        method: "POST",
        body: orderInfo,
      }),
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = ordersApiSlice;
