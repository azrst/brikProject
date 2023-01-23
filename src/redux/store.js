import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducer/counter';
import recomenProductReducer from './service/recomenProduct';

export default configureStore({
  reducer: {
    counter: counterReducer,
    recomendProduct: recomenProductReducer,
  },
});
