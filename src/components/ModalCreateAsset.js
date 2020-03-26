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
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
        </Modal>
    )
}

export default ModalCreateAsset;
