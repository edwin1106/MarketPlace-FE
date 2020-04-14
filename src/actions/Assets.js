import ACTIONS from "./types";
import {getAssets,getLastAssets, getAssetById} from "../api/AssetApi";

export const fetchAssets = (assets) =>({
  type: ACTIONS.FETCH_ASSETS,
  payload: assets,
})

export const fetchLastAssets = (assets) =>({
  type: ACTIONS.FETCH_LAST_ASSETS,
  payload: assets,
})

export const updateAsset = () =>({
  type: ACTIONS.UPDATE_ASSETS,
})

export const fetchAssetById = (asset) => ({
  type: ACTIONS.FETCH_ASSETS_BY_ID,
  payload: asset
})

export const fetchingAssets =() => async (dispatch) => {
  const asset = await getAssets()
  dispatch(fetchAssets(asset))
}

export const fetchingLastAssets = () => async (dispatch) => {
  const assets = await getLastAssets()
  dispatch(fetchLastAssets(assets))
}

export const fetchingAssetById = (id) => async (dispatch)=>{
  const asset = await getAssetById(id)
  dispatch(fetchAssetById(asset))
}






