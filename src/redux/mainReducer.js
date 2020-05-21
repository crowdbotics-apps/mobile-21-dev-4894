import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4435Reducer from '../features/EmailAuth4435/redux/reducers';
import EmailAuth4434Reducer from '../features/EmailAuth4434/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4435: EmailAuth4435Reducer,
EmailAuth4434: EmailAuth4434Reducer,
EmailAuth: EmailAuthReducer,

});