import axios from "axios";

const API = "http://localhost:5249/api/goals";

export const refineGoal = async (goal) => {
  const res = await axios.post(`${API}/refine`, { goal });
  return res.data;
};

export const saveGoal = async (goal) => {
  const res = await axios.post(API, goal);
  return res.data;
};

export const getGoals = async () => {
  const res = await axios.get(API);
  return res.data;
};