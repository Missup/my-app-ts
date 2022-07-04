import {
  RecommendProductActionTypes,
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  FETCH_RECOMMEND_PRODUCTS_FAIL,
} from "./recommendProductsActions";

interface RecommendProductsState {
  productList: any[];
  loading: boolean;
  error: string | null;
}

const defaultState: RecommendProductsState = {
  productList: [],
  loading: true,
  error: null,
};

const fn = (state = defaultState, action: RecommendProductActionTypes) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        loading: false,
      };
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default fn;
