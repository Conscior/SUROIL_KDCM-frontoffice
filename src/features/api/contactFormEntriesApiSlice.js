import { apiSlice } from "./apiSlice";

export const contactFormEntriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createContactFormEntry: builder.mutation({
      query: (contactForm) => ({
        url: "/contactFormEntries",
        method: "POST",
        body: contactForm,
      }),
    }),
  }),
});

export const { useCreateContactFormEntryMutation } = contactFormEntriesApiSlice;
