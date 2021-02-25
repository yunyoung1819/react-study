import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import sampleThunk from './sampleThunk';
import loading from './loading';

const rootReducer = combineReducers({
    counter,
    sample: sampleThunk,
    loading
});

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐주는 역할
    yield all([counterSaga()]);
}

export default rootReducer;