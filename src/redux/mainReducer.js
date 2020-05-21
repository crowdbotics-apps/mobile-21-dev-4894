import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4438Reducer from '../features/EmailAuth4438/redux/reducers';
import EmailAuth4437Reducer from '../features/EmailAuth4437/redux/reducers';
import EmailAuth4436Reducer from '../features/EmailAuth4436/redux/reducers';
import EmailAuth4434Reducer from '../features/EmailAuth4434/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4438: EmailAuth4438Reducer,
EmailAuth4437: EmailAuth4437Reducer,
EmailAuth4436: EmailAuth4436Reducer,
EmailAuth4434: EmailAuth4434Reducer,
EmailAuth: EmailAuthReducer,

});