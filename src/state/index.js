import { configureStore } from '@reduxjs/toolkit'

import sidebar from './sidebar/reducer';

const store = configureStore({
    reducer: {
        sidebar,
    }
})

export default store