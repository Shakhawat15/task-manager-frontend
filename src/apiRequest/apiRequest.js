import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import store from "../redux/store/store";
import { hideLoader, showLoader } from "../redux/state-slice/settingsSlice";
import {
  getToken,
  setEmail,
  setOTP,
  setToken,
  setUser,
} from "../helper/SessionHelper";
import {
  SetCanceledTask,
  SetCompletedTask,
  SetNewTask,
  SetProgressTask,
} from "../redux/state-slice/taskSlice";
import { SetSummary } from "../redux/state-slice/summarySlice";
import { SetProfile } from "../redux/state-slice/profileSlice";

const baseURL = `https://task-manager-server-api.vercel.app/api/v1`;
// const baseURL = `http://localhost:3000/api/v1`;

const AxiosHeader = { headers: { Authorization: getToken() } };

export const RegistrationRequest = async (
  firstName,
  lastName,
  email,
  mobile,
  password,
  photo
) => {
  const URL = `${baseURL}/register`;
  const PostBody = { firstName, lastName, email, mobile, password, photo };
  try {
    store.dispatch(showLoader());
    const response = await axios.post(URL, PostBody);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      SuccessToast(response.data.message);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const LoginRequest = async (email, password) => {
  const URL = `${baseURL}/login`;
  const PostBody = { email, password };
  try {
    store.dispatch(showLoader());
    const response = await axios.post(URL, PostBody);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      setToken(response.data.token);
      setUser(response.data.data);
      SuccessToast(response.data.message);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const createTaskRequest = async (title, description) => {
  const URL = `${baseURL}/task`;
  const PostBody = { title, description, status: "New" };
  try {
    store.dispatch(showLoader());
    const response = await axios.post(URL, PostBody, AxiosHeader);
    store.dispatch(hideLoader());

    if (response.status === 200) {
      SuccessToast(response.data.message);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const getTaskByStatus = async (status) => {
  const URL = `${baseURL}/tasks/${status}`;
  try {
    store.dispatch(showLoader());
    const response = await axios.get(URL, AxiosHeader);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      if (status === "New") {
        store.dispatch(SetNewTask(response.data.data));
      } else if (status === "Completed") {
        store.dispatch(SetCompletedTask(response.data.data));
      } else if (status === "Progress") {
        store.dispatch(SetProgressTask(response.data.data));
      } else if (status === "Canceled") {
        store.dispatch(SetCanceledTask(response.data.data));
      } else {
        ErrorToast("Something Went Wrong!");
      }
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const summaryTaskRequest = async () => {
  const URL = `${baseURL}/tasks-count`;
  try {
    store.dispatch(showLoader());
    const response = await axios.get(URL, AxiosHeader);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      store.dispatch(SetSummary(response.data.data));
    } else {
      ErrorToast("Something Went Wrong!");
    }
  } catch (error) {
    store.dispatch(hideLoader());
    console.log("error", error);
    ErrorToast(error.response.data.message);
  }
};

export const deleteTaskRequest = async (id) => {
  const URL = `${baseURL}/task/${id}`;
  try {
    store.dispatch(showLoader());
    const response = await axios.delete(URL, AxiosHeader);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      SuccessToast(response.data.message);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const updateStatusRequest = async (id, status) => {
  const URL = `${baseURL}/task-status/${id}/${status}`;
  try {
    store.dispatch(showLoader());
    const response = await axios.put(URL, {}, AxiosHeader);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      SuccessToast(response.data.message);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const getProfileRequest = async () => {
  const URL = `${baseURL}/user-profile`;
  try {
    store.dispatch(showLoader());
    const response = await axios.get(URL, AxiosHeader);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      store.dispatch(SetProfile(response.data.data));
    } else {
      ErrorToast("Something Went Wrong!");
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const updateProfileRequest = async (
  firstName,
  lastName,
  photo,
  mobile,
  password,
  email
) => {
  const URL = `${baseURL}/update-profile`;
  const PostBody = { firstName, lastName, photo, mobile, password };
  const userDetail = { firstName, lastName, photo, mobile, email };
  try {
    store.dispatch(showLoader());
    const response = await axios.put(URL, PostBody, AxiosHeader);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      SuccessToast(response.data.message);
      setUser(userDetail);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const verifyEmailRequest = async (email) => {
  const URL = `${baseURL}/verify-email/${email}`;
  try {
    store.dispatch(showLoader());
    const response = await axios.get(URL);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      setEmail(email);
      SuccessToast(response.data.message);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const verifyOTPRequest = async (email, otp) => {
  const URL = `${baseURL}/verify-otp/${email}/${otp}`;
  try {
    store.dispatch(showLoader());
    const response = await axios.get(URL);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      SuccessToast(response.data.message);
      setOTP(otp);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};

export const resetPasswordRequest = async (email, otp, password) => {
  const URL = `${baseURL}/reset-password/${email}/${otp}`;
  const PostBody = { password };
  try {
    store.dispatch(showLoader());
    const response = await axios.put(URL, PostBody);
    store.dispatch(hideLoader());
    if (response.status === 200) {
      SuccessToast(response.data.message);
      return true;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};
