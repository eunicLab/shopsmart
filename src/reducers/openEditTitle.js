const openEditTitleReducer = (state = false, action) => {
  switch (action.type) {
    case 'SEND_OPEN_EDIT_STATE':
      return action.payload;

    default:
      return state;
  }
};
export default openEditTitleReducer;
