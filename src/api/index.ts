import axios from "axios";
import { toast } from "react-toastify";

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  password: string;
}

export const login = async ({ username, password }: LoginData) => {
  try {
    const response = await axios.post("http://localhost:5000/login", {
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);
    toast.success("Login successful!");
  } catch (err) {
    toast.error("Login failed. Please check your credentials.");
  }
};

export const register = async ({ username, password }: RegisterData) => {
  try {
    await axios.post("http://localhost:5000/register", {
      username,
      password,
    });
    toast.success("Register successful!");
  } catch (err) {
    toast.error("Register failed. Please check your credentials.");
  }
};
