import {fetchingAssets} from '../actions/Assets';
import {connect} from 'react-redux';
import Assets from '../components/Assets';

const mapStateToProps = (state) => ({
  assets: state.asset.assetsData
})

export default connect(mapStateToProps,{fetchingAssets})(Assets)
