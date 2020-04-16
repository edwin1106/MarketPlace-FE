import React from 'react'
import Asset from './Asset'

class DetailAsset extends React.Component {

  componentDidMount() {
    this.props.fetchingAssetById(this.props.match.params.Id)
  }

  render() {
    if (this.props.asset) {
      const asset = this.props.asset
      return (
          <div className="card cardDetails">
            <div className="row ">
              <div className="col-md-7 col-sm-12 col-xs-12">
                <img src={asset.imageURL} class="card-img-top" alt="..."  />
              </div >
              <div className="col">
                <div className="card-body cardDetails-body">
                  <h5 className="card-title">{asset.title}</h5>
                    <p className="card-text">{asset.description}</p>
                    <p className="card-text">{asset.description}</p>
                    <p className="card-text">{asset.description}</p>
                    <p className="card-text">{asset.description}</p>
                    <br/>
                    <p className="card-text"><small className="text-muted">{asset.tag}</small></p>
                  <a href="#" className="btn btn-outline-primary">Download</a>
                </div>
              </div>
            </div>
          </div>
      );
    }
    return <div></div>
  }
}

export default DetailAsset;
