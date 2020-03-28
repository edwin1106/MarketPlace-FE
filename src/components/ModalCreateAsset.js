import React from 'react';
import Modal from './Modal';

const getHeader = () => {
    return (
        <h5 className="modal-title" id="exampleModalLabel">New Asset</h5>
    );
}

const getFooter = () => {
    return(
        <>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </>
    );
}

const ModalCreateAsset =({id}) => {
    return (
        <Modal id= {id} header={getHeader()} footer={getFooter()}>
            <div>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
        </Modal>
    )
}

export default ModalCreateAsset;
