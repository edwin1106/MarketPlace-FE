import ACTIONS from "./types";
import {getAssets,postAssets,putAssets, getAssetsById} from "../api/AssetApi";
import history from '../history';

export const fetchAssets = (assets) =>({
  type: ACTIONS.FETCH_ASSETS,
  payload: assets,
})

export const updateAsset = () =>({
  type: ACTIONS.UPDATE_ASSETS,
})

export const fetchAssetById = (asset) => ({
  type: ACTIONS.FETCH_ASSETS_BY_ID,
  payload: asset
})

export const fetchingAssets = () => async (dispatch) => {
  const assets = await getAssets()
  dispatch(fetchAssets(assets))
}





