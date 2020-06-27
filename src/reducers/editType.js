const editTypeReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEND_EDIT_TYPE':
      return action.payload;

    default:
      return state;
  }
};
export default editTypeReducer;
