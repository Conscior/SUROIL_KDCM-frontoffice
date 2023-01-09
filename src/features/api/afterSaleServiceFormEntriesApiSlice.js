import { apiSlice } from "./apiSlice";

export const afterSaleServiceFormEntriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAfterSaleServiceFormEntry: builder.mutation({
      query: (afterSaleServiceForm) => ({
        url: "/afterSaleServiceFormEntries",
        method: "POST",
        body: afterSaleServiceForm,
      }),
    }),
  }),
});

export const { useCreateAfterSaleServiceFormEntryMutation } = afterSaleServiceFormEntriesApiSlice;
