const openListReducer = (state = false, action) => {
  switch (action.type) {
    case 'SEND_OPENLIST_STATE':
      return action.payload;

    default:
      return state;
  }
};
export default openListReducer;
