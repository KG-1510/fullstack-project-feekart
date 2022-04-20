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
    return _res;
  } catch (err) {
    errorHandler(err);
    return false;
  }
};

export const postRegister = async (values) => {
  try {
    const _res = await axios({
      method: "POST",
      url: `${baseUrl}/Register`,
      data: values,
    });
    return _res;
  } catch (err) {
    errorHandler(err);
    return false;
  }
};

export const getUserProfile = async (values) => {
  try {
    const _res = await axios({
      method: "POST",
      url: `${baseUrl}/userprofile`,
      data: values,
    });
    return _res;
  } catch (err) {
    errorHandler(err);
    return false;
  }
};

export const getRzpOrderId = async (values) => {
  try {
    const _res = await axios({
      method: "POST",
      url: `${baseUrl}/transaction/rzpOrderId`,
      data: values,
    });
    return _res;
  } catch (err) {
    errorHandler(err);
    return false;
  }
};

export const getLedgerTransactions = async (values) => {
  try {
    const _res = await axios({
      method: "POST",
      url: `${baseUrl}/transaction/ledger`,
      data: values,
    });
    return _res;
  } catch (err) {
    errorHandler(err);
    return false;
  }
};