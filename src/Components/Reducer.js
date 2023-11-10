// reducers.js
const initialState = {
    items: [], // 객체를 저장하는 배열
  };
  
  // reducers.js
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return action.payload;
    }
  };
  
  export default rootReducer;
  
  