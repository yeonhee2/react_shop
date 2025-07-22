import {configureStore, createSlice} from '@reduxjs/toolkit';
import cart from './cartSlice';
import watched from './watchedSlice';

// const test = createSlice({
//   name: 'test',
//   initialState: 'hello'
// })

// const item = createSlice({
//   name: 'item',
//   initialState: ['apple', 'banana']
// })

const num = createSlice({
  name: 'num',
  initialState: 1,
  reducers: {
    // 변경함수 - 여러개 만들 수 있음, 액션(변경함수)이 포함됨
    changeNum() {
      return 10
    },
    plusNum(state) {
      return state + 1;
    },
    // state : 현재값, action: 매개변수 받아주는 값
    nPlusNum(state, action) {
      console.log(action)
      return state + action.payload
    }
  }
})

const obj = createSlice({
  name: 'obj',
  initialState: { name: 'hong', age: 20},
  reducers: {
    changeAge(state, action) {
      state.age = action.payload
    }
  }
})
// 변경함수를 외부에서 사용하려면 내보내야함( export )
// 여러개를 내보내기 때문에 default가 빠짐
export const { changeNum, plusNum, nPlusNum } = num.actions
export const { changeAge } = obj.actions

export default configureStore({
  reducer: {
    // test: test.reducer,
    // item: item.reducer,
    cart: cart.reducer,
    num: num.reducer,
    obj: obj.reducer,
    watched: watched.reducer,
  }

})