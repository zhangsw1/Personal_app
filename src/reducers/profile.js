import {
    GET_PROFILE   
} from '../constants/actions';

const initState = {
    user:{
        name:'jhaha'
    }
};
export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_PROFILE:
            console.log('HERE');
            return {
                ...state,
            user: action.payload,
            }
            default:
                return state
    }
}