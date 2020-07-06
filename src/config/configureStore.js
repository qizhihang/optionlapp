import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from '../reducers/Main'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from '../middleware/logger'
import monitorReducersEnhancer from '../enhancers/monitorReducer'

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)
    /*   if (process.env.NODE_ENV !== 'production' && module.hot) {
          module.hot.accept('../reducers/Main', () => store.replaceReducer(rootReducer))
      } */
    return store
}