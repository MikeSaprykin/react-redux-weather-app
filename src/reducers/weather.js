import * as types from '../actions/action.types';

export default function (state = [], action) {
    const lookUp = {
        [types.FETCH_WEATHER]: (state, action) => {
            return [ action.payload.data, ...state ]
        }
    };
    return lookUp[action.type] ?
        lookUp[action.type](state, action) :
        state;
}
