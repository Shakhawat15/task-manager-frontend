import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import store from "../redux/store/store";
import { hideLoader, showLoader } from "../redux/state-slice/settingsSlice";

const baseURL = `https://task-manager-server-api.vercel.app/api/v1`;

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
      return response.data;
    }
  } catch (error) {
    store.dispatch(hideLoader());
    ErrorToast(error.response.data.message);
  }
};
