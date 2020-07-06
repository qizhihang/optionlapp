import { createSelector } from 'reselect'
const getRouterJump = state => state.routerJump
export const makeGetCurrentPage = () => {
    return createSelector(
        [getRouterJump], (routerJump) => (
            routerJump && routerJump.length > 0 ? routerJump[routerJump.length - 1] : { id: 0, router: '/' }

        ))
}