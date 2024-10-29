import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ReceipeReducer from './ReceipeReducer'
import ReceipeFilter from './ReceipeFilter'

const rootReducer = combineReducers({
    receipeData: ReceipeReducer,
    receipeFilter: ReceipeFilter,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [],
            },
            immutableCheck: false,
        }),
});

export default store;
