import {fetchingAssets} from '../actions/Assets';
import {connect} from 'react-redux';
import AllAssets from '../components/AllAssets';

const mapStateToProps = (state) => ({
  assets: state.asset.assetsData
})

export default connect(mapStateToProps,{fetchingAssets})(AllAssets)
