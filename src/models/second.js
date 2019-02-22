import delay from 'core-js/core/delay'

export default {
  namespace: 'second',
  state: {
    num: 0
  },
  reducers: {
    add(state) {
      state.num += 1;
      return  {...state}
    },
  },
  effects: {
    *addAfter1Second(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'add' });
    },
  },
}
