import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "../state-slice/settingsSlice";
import taskReducer from "../state-slice/taskSlice";
import summaryReducer from "../state-slice/summarySlice";
import profileReducer from "../state-slice/profileSlice";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    task: taskReducer,
    summary: summaryReducer,
    profile: profileReducer,
  },
});
