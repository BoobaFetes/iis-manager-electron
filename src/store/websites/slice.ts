import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { IWebSite, WebSiteStatus } from "./IWebSite";
import { ICommonState } from "../types";

interface IState extends ICommonState {
  data: IWebSite[];
}

const initialState: IState = {
  data: [
    { id: "0001", name: "fake website 1", status: WebSiteStatus.Stopped },
    { id: "0002", name: "fake website 2", status: WebSiteStatus.Started },
  ],
  loading: false,
  called: false,
  error: undefined,
};

const slice = createSlice<IState, SliceCaseReducers<IState>>({
  name: "webSites",
  initialState,
  reducers: {
    create(state, { payload }: PayloadAction<IWebSite>) {
      state.data = [...state.data, payload];
    },
    update(state, { payload }: PayloadAction<IWebSite>) {
      state.data = state.data.map((i) => (i.id === payload.id ? payload : i));
    },
    delete(state, { payload }: PayloadAction<IWebSite>) {
      state.data = state.data.filter((i) => i.id !== payload.id);
    },
  },
});

export default slice;
