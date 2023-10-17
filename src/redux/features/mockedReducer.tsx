import { createSlice } from '@reduxjs/toolkit';

export interface AuthProps {
  mock: string;
}

const initialState: AuthProps = {
  mock: 'mock',
};

const mockSlice = createSlice({
  name: 'mock',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
});

export const { resetState } = mockSlice.actions;
export default mockSlice.reducer;
