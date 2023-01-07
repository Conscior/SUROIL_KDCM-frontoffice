import { apiSlice } from "./apiSlice";

export const contactFormEntriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContactFormEntry: builder.mutation({
      query: (contactFormEntry) => ({
        url: "/contactFormEntries",
        method: "POST",
        body: contactFormEntry,
      }),
    }),
  }),
});

export const { useCreateContactFormEntryMutation } = contactFormEntriesApiSlice;
