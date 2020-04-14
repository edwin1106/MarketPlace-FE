import {fetchingAssetById} from '../actions/Assets';
import DetailAsset from '../components/DetailAsset';
import {withRouter} from 'react-router'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  asset: state.asset.actualAsset
})
export default withRouter(connect(mapStateToProps,{fetchingAssetById})(DetailAsset))
