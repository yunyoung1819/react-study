import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 3초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 3000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 3000);
};

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1,
    },
    initialState
);

export default counter;