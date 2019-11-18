import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';
// Reducer를 한개로 합칠 때 사용되는 내장 메소드이다.

const counterInitialState = {
    value: 0,
    diff: 1
}

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
            value: state.value + state.diff
        });
        case DECREMENT:
            return Object.assign({}, state, {
            value: state.value - state.diff
        });
        case SET_DIFF:
            return Object.assign({}, state, {
            value: action.diff
        });
        default:
            return state;
    }
}

const extra = (state = {value: 'this_is_extra_reducer'}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// combineReducers 메소드 사용법(아래 코드와 동일)
const counterApp = combineReducers({
   counter,
   extra 
});
// const counterApp = ( state = { }, action ) => {
//     return {
//         counter: counter(state.counter, action),
//         extra: extra(state.extra, action)
//     }
// }

// 각 Reducer에 Key를 주고싶다면 다음과 같이 작성한다.
// const counterApp = combineReducers({
//     a: counter,
//     b: extra 
// });

export default counterApp;