import {configureStore} from '@reduxjs/toolkit';
import cartDucks from './cartDucks';

const store = configureStore({
    reducer: {
        cart: cartDucks,
    }
});

export default store;