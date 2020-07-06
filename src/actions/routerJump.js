import { router_jump } from 'constants/actionTypes';
let id = 0
export const routerJump = (router) => ({
    type: router_jump,
    id: id++,
    router
})