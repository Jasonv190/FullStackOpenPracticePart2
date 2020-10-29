import axios from "axios";

const baseUrl = "http://localhost:3000/persons";

export const getAll = () => {
  return axios.get(baseUrl);
};

export const create = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};

export const remove = (personId) => {
  return axios.delete(`${baseUrl}/${personId}`);
};
