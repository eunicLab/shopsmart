const noLoginPageReducer = (state = true, action) => {
  switch (action.type) {
    case 'LOGIN_PAGE_DISPLAY':
      return false;
    case 'LOGIN_PAGE_NO_DISPLAY':
      return true;
    default:
      return state;
  }
};
export default noLoginPageReducer;
