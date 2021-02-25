import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/efftects;'
import * as api from '../lib/api';
import { startLoading, finishLoading } from "./loading";

// redux-saga를 사용하여 API 요청하기
// 액션 타입을 선언
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

export const getPost = createAction(GET_POST, id => id);

function* getPostSaga(action) {
    yield put(startLoading(GET_POST));  // 로딩 시작
    // 파라미터로 action을 받아오면 액션의 정보를 조회할 수 있습니다.
    try {
        // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있습니다.
        // 첫번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수입니다.
        const post = yield call(api.getPost, action.payload); // api.getPost(action.payload)를 의미
        yield put({
            type: GET_POST_SUCCESS,
            payload: post.data
        });
    } catch (e) {
        // try/catch 문을 사용하여 에러도 잡을 수 있습니다.
        yield put({
            type: GET_POST_FAILURE,
            payload: e,
            error: true
        });
    }
    yield put(finishLoading(GET_POST)); // 로딩 완료
}