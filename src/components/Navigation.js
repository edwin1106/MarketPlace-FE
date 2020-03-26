import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import ModalCreateAsset from '../components/ModalCreateAsset'

const Navigation = () => (
  <>
  <Navbar className="bg-dark-alpha-3" variant="dark" expand="lg" fixed="top">
    <div className="container">
      <Link className="navbar-brand" to={`/`}>
        GamesMarketPlace
      </Link>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">        
        <Nav className="mr-auto">
          <Link className="nav-link" to={`/`}>
            Assets
          </Link>
        </Nav>
        <button class="btn btn-outline-primary my-2 my-sm-0" data-toggle="modal" data-target="#modalCreateAsset">Create</button>        
      </Navbar.Collapse>
      
    </div>
      
  </Navbar>

  <ModalCreateAsset
      id="modalCreateAsset"
    />
</>
  
)

export default Navigation
