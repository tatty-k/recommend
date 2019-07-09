import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand" href="#">Recommend</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={'/'}>LANDING</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/profile'}>PROFILE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/group/:id'}>GROUP</Link>
              </li>
              <li className="nav-item">

              {/* <!-- Button trigger modal --> */}
              <li className="nav-item" data-toggle="modal" data-target="#exampleModal">
                ADD GROUP
              </li>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Add New Group</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                     {/* TODO: add formRef, addGroup and addGroup */}
                      <form>
                        <label>
                          <span>GROUP NAME</span>
                          <input
                            name="name"
                            type="text"
                            // TODO:
                            // value={}
                            // onChange={}
                            required
                          />
                          </label>
                          <label>
                          <span>DESCRIPTION</span>
                          <input
                            name="description"
                            type="text"
                            // TODO:
                            // value={}
                            // onChange={}
                            required
                          />
                          </label>
                          <label>
                          <span>MEMBERS</span>  
                          {/* TODO: make this a search */}
                          <select
                            name="members"
                            type="text"
                            // TODO:
                            // value={}
                            // onChange={}
                            > 
                            <option value="1">Sally Mea</option>
                          </select>
                        </label>
                      </form> 
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              </li>
            </ul>
          </div>
        </nav>
    );
}
 
export default NavBar;