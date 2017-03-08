const INITIAL_STATE = { email: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case 'YOUR_ACT':
    //   return action.payload;
    default:
      return state;
  }
};
