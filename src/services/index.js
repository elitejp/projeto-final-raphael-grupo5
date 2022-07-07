import axios from "axios";

export const apiOwner = axios.create({
  baseURL: "https://user-and-pets.herokuapp.com",
  timeout: 10000,
});

export const apiCare = axios.create({
  baseURL: "https://caregiver-and-pets.herokuapp.com",
  timeout: 10000,
});
