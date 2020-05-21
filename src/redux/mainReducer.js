import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4442Reducer from '../features/EmailAuth4442/redux/reducers';
import EmailAuth4441Reducer from '../features/EmailAuth4441/redux/reducers';
import EmailAuth4440Reducer from '../features/EmailAuth4440/redux/reducers';
import EmailAuth4439Reducer from '../features/EmailAuth4439/redux/reducers';
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
EmailAuth4442: EmailAuth4442Reducer,
EmailAuth4441: EmailAuth4441Reducer,
EmailAuth4440: EmailAuth4440Reducer,
EmailAuth4439: EmailAuth4439Reducer,
EmailAuth4438: EmailAuth4438Reducer,
EmailAuth4437: EmailAuth4437Reducer,
EmailAuth4436: EmailAuth4436Reducer,
EmailAuth4434: EmailAuth4434Reducer,
EmailAuth: EmailAuthReducer,

});