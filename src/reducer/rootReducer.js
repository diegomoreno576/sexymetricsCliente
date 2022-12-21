import { combineReducers } from 'redux';
import analizePostSlice from '../slices/analizisPost';
import currentDate from '../slices/currentDate';




const rootReducer = combineReducers({
    // Add your reducers here
    analizePost: analizePostSlice,
    currentDate: currentDate

  
  });

export default rootReducer;