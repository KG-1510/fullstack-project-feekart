import axios from "axios";
import { baseUrl } from "./constants";
import { errorHandler } from "./toastify";

export const postLogin = async (values) => {
  try {
    const _res = await axios({
      method: "POST",
      url: `${baseUrl}/Login`,
      data: values,
    });
    // setCookie(null, "authToken", _res.data.authToken);
    return _res;
  } catch (err) {
    errorHandler(err);
    return false;
  }
};
