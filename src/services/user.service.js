import api from "./api";

const getUser = () => {
  return api.get("/users/1");
};

const getPublicContent = () => {
  return api.get("/test/all");
};

const getUserBoard = () => {
  return api.get("/test/user");
};

const getModeratorBoard = () => {
  return api.get("/test/mod");
};

const getAdminBoard = () => {
  return api.get("/test/admin");
};

const UserService = {
  getUser,
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;