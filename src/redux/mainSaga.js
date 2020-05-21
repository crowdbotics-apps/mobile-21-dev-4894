import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4435Saga from '../features/EmailAuth4435/redux/sagas';
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
EmailAuth4435Saga,
EmailAuth4434Saga,
EmailAuthSaga,
    
  ]);
}