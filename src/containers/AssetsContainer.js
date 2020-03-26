import {fetchingLastAssets} from '../actions/Assets';
import {connect} from 'react-redux';
import Assets from '../components/Assets';

const mapStateToProps = (state) => ({
  assets: state.asset.lastAssetsData
})

export default connect(mapStateToProps,{fetchingLastAssets})(Assets)
