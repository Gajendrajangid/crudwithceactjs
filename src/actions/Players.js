import {
    CREATE_PLAYER,
    RETRIEVE_PLAYER,
    UPDATE_PLAYER,
    DELETE_PLAYER,
    DELETE_ALL_PLAYER,
  } from "./types";
  
  import PlayerService from "../services/PlayerService";
  
  export const createPlayer = (data) => async (dispatch) => {
    try {
      const res = await PlayerService.create(data);
  
      dispatch({
        type: CREATE_PLAYER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrievePlayer = () => async (dispatch) => {
    try {
      const res = await PlayerService.getAll();
  
      dispatch({
        type: RETRIEVE_PLAYER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updatePlayer = (id, data) => async (dispatch) => {
    try {
      const res = await PlayerService.update(id, data);
  
      dispatch({
        type: UPDATE_PLAYER,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deletePlayer = (id) => async (dispatch) => {
    try {
      await PlayerService.remove(id);
  
      dispatch({
        type: DELETE_PLAYER,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllPlayer = () => async (dispatch) => {
    try {
      const res = await PlayerService.removeAll();
  
      dispatch({
        type: DELETE_ALL_PLAYER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findPlayerByName = (name) => async (dispatch) => {
    try {
      const res = await PlayerService.findByName(name);
  
      dispatch({
        type: RETRIEVE_PLAYER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };