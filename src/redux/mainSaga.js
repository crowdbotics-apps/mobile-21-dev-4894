import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4442Saga from '../features/EmailAuth4442/redux/sagas';
import EmailAuth4441Saga from '../features/EmailAuth4441/redux/sagas';
import EmailAuth4440Saga from '../features/EmailAuth4440/redux/sagas';
import EmailAuth4439Saga from '../features/EmailAuth4439/redux/sagas';
import EmailAuth4438Saga from '../features/EmailAuth4438/redux/sagas';
import EmailAuth4437Saga from '../features/EmailAuth4437/redux/sagas';
import EmailAuth4436Saga from '../features/EmailAuth4436/redux/sagas';
import EmailAuth4434Saga from '../features/EmailAuth4434/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4442Saga,
EmailAuth4441Saga,
EmailAuth4440Saga,
EmailAuth4439Saga,
EmailAuth4438Saga,
EmailAuth4437Saga,
EmailAuth4436Saga,
EmailAuth4434Saga,
EmailAuthSaga,
    
  ]);
}