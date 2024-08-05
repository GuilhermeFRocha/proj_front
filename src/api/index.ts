import axios from "axios";

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
    alert("Login successful");
  } catch (err) {
    alert("Invalid credentials");
  }
};

export const register = async ({ username, password }: RegisterData) => {
  try {
    await axios.post("http://localhost:5000/register", {
      username,
      password,
    });
    alert("User registered successfully");
  } catch (err) {
    alert("Error registering user");
  }
};
