const privacyDisplayReducer = (state = false, action) => {
  switch (action.type) {
    case 'SEND_PRIVACY_DISPLAY':
      return action.payload;

    default:
      return state;
  }
};
export default privacyDisplayReducer;
