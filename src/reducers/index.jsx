import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LoginReducer from './LoginSlice'
import {combineReducer} from '@reduxjs/toolkit'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer=combineReducer({
    Login:LoginReducer
})

export default  persistReducer(persistConfig, rootReducer)