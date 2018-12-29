import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk' // 异步
import {Provider} from 'react-redux'
// import {counter} from './index.redux'
import reducer from './redux/reducer'
const store = createStore(reducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
console.log(store.getState())
ReactDOM.render(
    (<Provider store={store}>
        <App/>
    </Provider>)
    , document.getElementById('root'))
