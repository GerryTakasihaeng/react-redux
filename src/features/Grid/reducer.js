import { ADD_TILE, REMOVE_TILE } from "./constants";

let initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TILE:
      let nexId = state.length + 1;
      let newTile = { id: nexId, color: action.color };
      return [...state, newTile];
    case REMOVE_TILE:
      return state.filter((tile) => tile.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
