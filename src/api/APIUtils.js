import axios from "axios";

const BASE_URL = "https://png-backend.herokuapp.com";
const VERSION = "/v1";
const API = "/api";
const FULL_URL = BASE_URL + VERSION + API;

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  accept: "*/*",
};

function getJWTHeaders() {
  const token = localStorage.getItem("jwt");
  return {
    headers: {
      ...axiosConfig.headers,
      Authorization: token,
    },
  };
}

export async function login(user) {
  return await axios({
    method: "post",
    url: FULL_URL + "/login",
    data: user,
  });
}

export async function getAllAddress() {
  return await axios({
    method: "get",
    url: FULL_URL + "/address",
    data: {},
  });
}

//

export function signup() {
  console.log("bar");
}
