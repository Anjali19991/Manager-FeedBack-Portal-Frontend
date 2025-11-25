import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // change when backend is ready
});

// LOGIN
export const login = (payload) => api.post("/login", payload);

// LIST RECORDS
export const getRecords = () => api.get("/records");

// CREATE RECORD
export const createRecord = (payload) => api.post("/records", payload);

// VIEW SINGLE RECORD
export const getRecord = (id) => api.get(`/records/${id}`);
