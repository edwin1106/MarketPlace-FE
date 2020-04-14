import React from 'react';
import Modal from './Modal';

const getHeader = () => {
  return (
    <h5 className="modal-title" id="exampleModalLabel">New Asset</h5>
  );
}

const getFooter = () => {
  return (
    <>
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    </>
  );
}

const ModalCreateAsset = ({ id }) => {
  return (
    <Modal id={id} header={getHeader()} footer={getFooter()}>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input className="form-control" id="title"  />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input className="form-control" id="description" />
          </div>
          <div className="form-group">
            <label htmlFor="tag">Tags</label>
            <input className="form-control" id="tag" />
          </div>
          <div className="form-group">
            <label htmlFor="imageURL">Image URL</label>
            <input className="form-control" id="imageURL" />
          </div>
          <button type="submit" className="btn btn-outline-primary">Create</button>
        </form>
      </div>
    </Modal>
  )
}

export default ModalCreateAsset;
