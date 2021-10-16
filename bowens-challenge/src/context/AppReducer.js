export default (state, action) => {
  switch (action.type) {
    case "WATCHED_MOVIES":
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    default:
      return state;
  }
};
