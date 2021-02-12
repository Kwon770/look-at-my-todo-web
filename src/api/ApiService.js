import axios from "axios";

const API_BASE_URL = "/api/v1/";

export const requestLoginApi = (name, email, picture) => {
  const userSaveRequestDto = { name, email, picture };
  return axios.post(API_BASE_URL + "user", userSaveRequestDto);
};
