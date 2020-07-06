import { router_jump } from 'constants/actionTypes';
const routerJump = (state = [], action) => {
    switch (action.type) {
        case router_jump:
            return [
                ...state, {
                    id: action.id,
                    router: action.router + action.id
                }
            ]
        default:
            return state
    }
}

export default routerJump