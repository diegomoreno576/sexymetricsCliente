import { combineReducers } from 'redux';
import analizePostSlice from '../slices/analizisPost';
import currentDate from '../slices/currentDate';
import customTooltip from '../slices/customTooltip';




const rootReducer = combineReducers({
    // Add your reducers here
    analizePost: analizePostSlice,
    currentDate: currentDate,
    customTooltip: customTooltip,

  
  });

export default rootReducer;