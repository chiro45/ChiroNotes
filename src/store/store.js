import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../components/reducers/authReducer";
import thunk from 'redux-thunk'
import { uiReducer } from "../components/reducers/uiReducer";
import { noteReducer } from "../components/reducers/notesReducers";

//configuracion del redux
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//redux nos brinda ciertas funciones para solucionar ciertos problemas por ejemplo el combineReducers
const reducers = combineReducers({
    auth : authReducer,
    ui: uiReducer,
    notes: noteReducer
})
//otra funcion de redux es el createStore
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)      //el redux-thunk nos ayuda a escribir funciones con logica interna
    )                               // que nos permite interactuar con los metodos de envio  y obtener el estado de la store de redux
    );