import {
    CREATE_PLAYER,
    RETRIEVE_PLAYER,
    UPDATE_PLAYER,
    DELETE_PLAYER,
    DELETE_ALL_PLAYER,
  } from "../actions/types";
  
  const initialState = [];
  
  function PlayerReducer(players = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_PLAYER:
        return [...players, payload];
  
      case RETRIEVE_PLAYER:
        return payload;
  
      case UPDATE_PLAYER:
        return players.map((player) => {
          if (player.id === payload.id) {
            return {
              ...player,
              ...payload,
            };
          } else {
            return player;
          }
        });
  
      case DELETE_PLAYER:
        return players.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_PLAYER:
        return [];
  
      default:
        return players;
    }
  };
  
  export default PlayerReducer;