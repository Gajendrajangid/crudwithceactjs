import http from "./HttpServices";

const getAll = () => {
  return http.get("/Player");
};

const get = id => {
  return http.get(`/Player/${id}`);
};

const create = data => {
  return http.post("/Player", data);
};

const update = (id, data) => {
  return http.put(`/Player/${id}`, data);
};

const remove = id => {
  return http.delete(`/Player/${id}`);
};

const removeAll = () => {
  return http.delete(`/Player`);
};

const findByName = name => {
  return http.get(`/Player?Name=${name}`);
};

const PlayerService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default PlayerService;