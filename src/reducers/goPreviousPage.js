const goPreviousPageReducer = (state = false, action) => {
  switch (action.type) {
    case 'SEND_GO_PREVIOUS_PAGE':
      return action.payload;

    default:
      return state;
  }
};
export default goPreviousPageReducer;
