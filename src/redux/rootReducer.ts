import { combineReducers } from 'redux';


import UserReducer from './User/UserReducer';
import DataAltaReducer from './DatAlta/DataAltaReducer';




const rootReducer = combineReducers({
    user:UserReducer,

    dataAlta:DataAltaReducer,
})

export default rootReducer