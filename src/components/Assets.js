import React from 'react'
import { Component } from 'react';
import Asset from '../components/Asset'
import asset from '../reducers/asset';

class Assets extends Component{
  componentDidMount(){
  this.props.fetchingLastAssets()
  }

  render(){
    if (this.props.loading) {
      return (
        <center>
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </center>
      );
    }
    return(
      <>
      <div className='card-deck'>
        {this.props.assets.map((asset) =>
        <Asset
        title = {asset.title}
        description = {asset.description}
        tag = {asset.tag}
        imageURL = {asset.imageURL}
      />
        )}
      </div>
      </>
    );
    
  }
}

export default Assets
