import ACTIONS from '../actions/types'

const defaultState = {
  assetsData: [],
  actualizarAssetData: undefined
}

const asset = (state = defaultState, action) => {
  switch(action.type){
    case ACTIONS.FETCH_ASSETS:
      return{ ...state, assetsData: action.payload};
    default:
      return state;
  }
};

export default asset
