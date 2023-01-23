import {createSlice} from '@reduxjs/toolkit';
import {dataMock} from './mock/mockRecomendProduct';

export const recomendProruct = createSlice({
  name: 'recomendProduct',
  initialState: {
    res: null,
    data: null,
  },
  reducers: {
    GET_PROMO_BANNER: state => {
      // example using service, should be hit api from api manager axios config
      // const serviceBanner = apimanager()
      state.data = dataMock;
    },
    CLEAR_PROMO_BANNER: state => {
      state.data = null;
    },
    // incrementByAmount: (state, action) => {
    //   state.data += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {GET_PROMO_BANNER, CLEAR_PROMO_BANNER} = recomendProruct.actions;

export default recomendProruct.reducer;
