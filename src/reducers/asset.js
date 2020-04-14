import ACTIONS from '../actions/types'

const defaultState = {
  assetsData: [],
  lastAssetsData: [],
  actualizarAssetData: undefined,
  actualAsset: undefined
}

const asset = (state = defaultState, action) => {
  switch(action.type){
    case ACTIONS.FETCH_ASSETS:
      return{ ...state, assetsData: action.payload};
    case ACTIONS.FETCH_LAST_ASSETS:
      return{ ...state, lastAssetsData: action.payload};
    case ACTIONS.FETCH_ASSETS_BY_ID:
      return{ ...state, actualAsset: action.payload}
    default:
      return state;
  }
};

export default asset
