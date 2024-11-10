import { createSlice } from "@reduxjs/toolkit";

import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";

const handleLoading = (state) => {
  state.loading = true;
};

const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    currentUpdatingContact: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetContacts: (state) => {
      state.items = [];
      state.currentUpdatingContact = null;
    },
    setUpdatingContact: (state, action) => {
      state.currentUpdatingContact = action.payload;
    },
    discardUpdating: (state) => {
      state.currentUpdatingContact = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handleLoading)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleError)
      .addCase(addContact.pending, handleLoading)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, handleLoading)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleError)
      .addCase(updateContact.pending, handleLoading)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentUpdatingContact = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(updateContact.rejected, handleError);
  },
});

export default slice.reducer;

export const { resetContacts, setUpdatingContact, discardUpdating } =
  slice.actions;
