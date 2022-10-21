import * as types from '../../constants/types';

const initialState = {
  isLoading: false,
  error: null,
  isCheckouts: false,
  checkoutsMess: null,
  isAlert: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.IS_AUTHENTICATING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case types.CHECKOUT_SUCCESS:
      return {
        ...state,
        isAlert: true,
        isCheckouts: true,
        checkoutsMess: 'Bạn đã đặt hàng thành công',
      };
    case types.CHECKOUT_FAIL:
      return {
        ...state,
        isAlert: true,
        isCheckouts: false,
        checkoutsMess: 'Sản phẩm hoặc thông tin chưa đúng. Hãy kiểm tra lại',
      };
    case types.CHECKOUT_RESET:
      return initialState;
    default:
      return state;
  }
};
